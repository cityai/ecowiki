import os
import requests
from pymongo import MongoClient
from urllib.parse import urlencode
from collections import OrderedDict

CITIES = {
        'paris': {
            'lat': '48.864716',
            'lon': '2.349014'
            },
        'berlin': {
            'lat': '52.5200',
            'lon': '13.4050'
            },
        'bruxelles': {
            'lat':  '50.8503',
            'lon': '4.3517'
            },
        'london': {
            'lat':  '51.5074',
            'lon': '0.1278'
            },
        'amsterdam': {
            'lat': '52.3702',
            'lon': '4.8952'
            }
        }

class Meetup(object):
    """Class that manages talking to Meetup API"""

    def __init__(self):
        MONGODB_DB = "meetup"
        MONGO_COLLECTION = "events"
        uri = f'mongodb://wikidb:27017/{MONGODB_DB}'
        print(f'MONGO URL: {uri}')
        self.mongo_client = MongoClient(uri)
        self.mongo_conn = self.mongo_client.get_database(MONGODB_DB).get_collection(MONGO_COLLECTION)
        self.access_token = os.environ['MEETUP_KEY']

    def clean_mongo(self):
        self.mongo_conn.delete_many({})
        self.mongo_conn.create_index("id", unique=True)

    def search(self, city=None):
        lat, lon = (None, None)
        if city:
            lat, lon = CITIES[city].values()
        params = OrderedDict([('key', self.access_token), ('sign', True), ('photo-host', 'public'), ('radius', 'smart'), ('page', 20), ('text', 'artificial intelligence'),
            ('lat',  lat), ('lon', lon)])
        response = requests.get('https://api.meetup.com/find/upcoming_events', params=urlencode(params))

        try:
            events = list()
            for event in response.json()['events']:
                print(event['name'])
                events.append({
                    'id': event['id'],
                    'name': event['name'],
                    'link': event['link'],
                    'description': event.get('description', None),
                    'date': event['local_date']
                    })
            return events

        except Exception as e:
            print(e)
            return list()

    def search_groups(self, city=None):
        lat, lon = (None, None)
        if city:
            lat, lon = CITIES[city].values()
        params = OrderedDict([
            ('key', self.access_token),
            ('sign', True), ('photo-host', 'public'),
            ('radius', 'smart'), ('page', 20),
            ('text', 'artificial intelligence'),
            ('lat',  lat), ('lon', lon)])
        response = requests.get('https://api.meetup.com/find/groups',
                                params=urlencode(params))

        return response.json()


    def save_mongo(self, events):
        for event in events:
            result = self.mongo_conn.insert_one(event)
            print(f'Inserted {result.inserted_id}')

    def save_md(self, events, city):
        if not os.path.isdir("../content/{}".format(city)):
            os.makedirs("../content/{}".format(city))

        filename = "../content/{}/meetup.md".format(city)
        ## If file exists, delete it
        if os.path.isfile(filename):
            os.remove(filename)

        file = open(filename,"w")
        file.write("# Meetup events \n\n")
        for event in events:
            file.write("## {} \n\n".format(event['name']))
            file.write("**{}** \n\n".format(event['date']))
            file.write("{} \n\n".format(event['description']))
        file.close()

    def save_md_groups(self, groups, city):
        # If no folder, create it
        if not os.path.isdir("../content/{}".format(city)):
            os.makedirs("../content/{}".format(city))

        # If file exists, delete it
        filename = "../content/{}/communities.md".format(city)
        if os.path.isfile(filename):
            os.remove(filename)

        file = open(filename, "w")
        file.write("# Communities \n\n")
        for group in groups:
            file.write("## {} \n\n".format(group['name']))
            file.write("Organizer: **{}** \n\n".format(group['organizer']['name']))
            file.write("{} \n\n".format(group['description']))
        file.close()

if __name__ == "__main__":
    meetup = Meetup()
    meetup.clean_mongo()
    for city in CITIES.keys():
        print(city)
        groups = meetup.search_groups(city=city)
        meetup.save_md_groups(groups, city)
        events = meetup.search(city=city)
        meetup.save_md(events, city)
        meetup.save_mongo(events)
