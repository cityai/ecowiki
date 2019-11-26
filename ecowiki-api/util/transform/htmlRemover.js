module.exports= function strip_html_tags(str)
{
   if ((str===null) || (str==='') || (str === undefined))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}