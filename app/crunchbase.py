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

class Crunchbase(object):
    """Class that manages talking to Crunchbase"""

    def __init__(self):
        MONGODB_DB = "meetup"
        MONGO_COLLECTION = "crunchbase"
        uri = f'mongodb://wikidb:27017/{MONGODB_DB}'
        print(f'MONGO URL: {uri}')
        self.mongo_client = MongoClient(uri)
        self.mongo_conn = self.mongo_client.get_database(MONGODB_DB).get_collection(MONGO_COLLECTION)
        self.api_key = os.environ['CRUNCHBASE_KEY']

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
        url = "https://api.crunchbase.com/v3.1/odm-organizations"

        querystring = {
                "user_key": self.api_key,
                "query": "artificial intelligence",
                "locations": city,
                "organization_types": "company"}

        response = requests.request("GET", url, params=querystring)
        return response.json()


    def save_md_companies(self, groups, city):
        # If no folder, create it
        if not os.path.isdir("../content/{}".format(city)):
            os.makedirs("../content/{}".format(city))

        # If file exists, delete it
        filename = "../content/{}/companies.md".format(city)
        if os.path.isfile(filename):
            os.remove(filename)

        file = open(filename, "w")
        file.write("# Companies \n\n")
        for group in groups['data']['items']:
            file.write("## {} \n\n".format(group['properties']['name']))
            file.write("City: **{}** \n\n".format(group['properties']['city_name']))
            file.write("Page: **{}** \n\n".format(group['properties']['homepage_url']))
            file.write("{} \n\n".format(group['properties']['short_description']))
        file.close()

if __name__ == "__main__":
    cb = Crunchbase()
    cb.clean_mongo()
    for city in CITIES.keys():
        print(city)
        groups = cb.search_groups(city=city)
        cb.save_md_companies(groups, city)
