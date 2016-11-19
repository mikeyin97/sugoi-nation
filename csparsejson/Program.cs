using System;
using System.Net;
using System.Web;
using System.IO;
using System.Collections.Generic;
//make sure to include System.Web.Extensions

namespace MakeAGETRequest_charp
{
    /// <summary>
    /// Summary description for Ad Class
    /// </summary>
    public class Ad
    {
        public string message { get; set; }
        public List<Data> data { get; set; }
    }

    public class Data
    {
        public string timestamp { get; set; }
        public string platform { get; set; }
        public string format { get; set; }
        public string impressions { get; set; }
        public string spend { get; set; }
    }

    class Program
    { 
        
        static void Main(string[] args)
        {
            string sURL;
            sURL = "http://localhost:8000/impressions?dc=EU";

            WebRequest wrGETURL;
            wrGETURL = WebRequest.Create(sURL);

            WebProxy myProxy = new WebProxy("myproxy", 80);
            myProxy.BypassProxyOnLocal = true;

            wrGETURL.Proxy = WebProxy.GetDefaultProxy();

            Stream objStream;
            objStream = wrGETURL.GetResponse().GetResponseStream();

            StreamReader objReader = new StreamReader(objStream);

            String jsonNA = "";
            //int i = 0;
            jsonNA = objReader.ReadLine();

            Ad absoluteaids = new System.Web.Script.Serialization.JavaScriptSerializer().Deserialize<Ad>(jsonNA);

            //testing
            Console.WriteLine("{0}",absoluteaids.data[7].timestamp);
            Console.ReadLine();

            //Console.WriteLine(json);
            //Console.ReadLine();
        }
    }
}