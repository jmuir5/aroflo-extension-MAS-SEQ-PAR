//defunct
const sutherland = [
  "2224",
  "2225",
  "2226",
  "2227",
  "2228",
  "2229",
  "2230",
  "2231",
  "2232",
  "2234",
];

const techLocations = {
  //mas
  Peter: [
    "2076",
    "2077",
    "2079",
    "2080",
    "2081",
    "2082",
    "2083",
    "2119",
    "2120",
    "2125",
    "2126",
    "2154",
    "2158",
    "2250",
    "2251",
    "2256",
    "2257",
    "2258",
    "2259",
    "2260",
    "2261",
    "2263",
  ],
  Eduardo: [
    "2084",
    "2085",
    "2086",
    "2087",
    "2088",
    "2090",
    "2092",
    "2093",
    "2094",
    "2095",
    "2096",
    "2097",
    "2099",
    "2100",
    "2101",
    "2102",
    "2103",
    "2104",
    "2105",
    "2106",
    "2107",
    "2108",
  ],
  //john old changed 18/1 //"John":["2061","2062","2063","2064","2067","2068","2069","2071","2072","2086","2087","2088","2089","2090","2092","2093","2094","2095","2096","2099","2100"],
  //john ed absence// "John":["2061","2062","2063","2064","2067","2068","2069","2071","2072","2084","2085","2086","2087","2088","2089","2090","2092","2093","2094","2095","2096","2097","2099","2100","2101","2102","2103","2104","2105"],
  John: [
    "2060",
    "2061",
    "2062",
    "2063",
    "2064",
    "2065",
    "2067",
    "2068",
    "2069",
    "2070",
    "2071",
    "2072",
    "2073",
    "2074",
    "2075",
    "2076",
    "2085",
    "2086",
    "2087",
    "2088",
    "2089",
    "2090",
    "2092",
    "2093",
    "2094",
    "2095",
    "2096",
    "2097",
    "2099",
    "2100",
  ],
  Sandy: [
    "2073",
    "2074",
    "2076",
    "2077",
    "2109",
    "2111",
    "2112",
    "2113",
    "2114",
    "2115",
    "2116",
    "2117",
    "2118",
    "2119",
    "2120",
    "2121",
    "2122",
    "2125",
    "2126",
    "2145",
    "2146",
    "2147",
    "2150",
    "2151",
    "2152",
    "2153",
    "2154",
    "2155",
    "2156",
    "2158",
    "2159",
    "2762",
    "2763",
    "2768",
    "2769",
  ], //john extended into eds area, 8/6/23
  Leo: [
    "2060",
    "2061",
    "2062",
    "2063",
    "2064",
    "2065",
    "2066",
    "2067",
    "2068",
    "2069",
    "2070",
    "2071",
    "2072",
    "2073",
    "2074",
    "2075",
    "2076",
    //"2088",
    "2089",
    "2090",
    "2109",
    "2110",
    "2111",
    "2112",
    "2113",
    "2114",
    "2119",
    "2120",
    "2121",
    "2122",
  ],
  Otavio:[
    "2015",
    "2018",
    "2019",
    "2020",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2044",
    "2204",
    "2205",
    "2216",
    "2217",
    "2219"
  ],
  //gee normal
  Gee: [
    "2010",
    "2011",
    "2016",
    "2017",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
  ],
  Vini:[
    "2133",
    "2135",
    "2136",
    "2190",
    "2191",
    "2192",
    "2193",
    "2194",
    "2195",
    "2196",
    "2203",
    "2204",
    "2206",
    "2207",
    "2208",
    "2209",
    "2210",
    "2211",
    "2212",
    "2213",
    "2214",
    "2218",
    "2220",
    "2221",
    "2222",
    "2223",
    "2224",
    "2225",
    "2226",
    "2227",
    "2228",
    "2229",
    "2230",
    "2231",
    "2232",
    "2234",
  ],
  Benji:[
    "2007",
    "2008",
    "2009",
    "2037",
    "2038",
    "2039",
    "2040",
    "2041",
    "2042",
    "2043",
    "2045",
    "2046",
    "2047",
    "2048",
    "2049",
    "2050",
    "2127",
    "2130",
    "2131",
    "2132",
    "2134",
    "2137",
    "2138",
    "2139",
    "2140"
  ],
  //wa
  Phill: [
    "6012",
    "6057",
    "6058",
    "6100",
    "6101",
    "6102",
    "6103",
    "6104",
    "6105",
    "6106",
    "6107",
    "6108",
    "6109",
    "6110",
    "6147",
    "6148",
    "6149",
    "6150",
    "6151",
    "6152",
    "6153",
    "6154",
    "6155",
    "6156",
    "6157",
    "6158",
    "6159",
    "6160",
    "6162",
    "6163",
    "6164",
    "6166",
  ],
  // ozgur up to joondalup 27/6/23 //"Ozgur":["6000","6003","6004","6005","6006","6007","6008","6009","6010","6011","6012","6014","6015","6016","6017","6018","6019","6020","6021","6022","6023","6024","6025","6026","6027","6028","6029","6050","6051","6052","6053","6059","6060","6061","6062","6159","6803","6809","6817","6820","6827","6830","6832","6865","6900","6902","6903","6907","6909","6913","6916","6918","6919","6923","6931","6937","6938","6940"],
  Ozgur: [
    "6000",
    "6003",
    "6004",
    "6005",
    "6006",
    "6007",
    "6008",
    "6009",
    "6010",
    "6011",
    "6012",
    "6014",
    "6015",
    "6016",
    "6017",
    "6018",
    "6019",
    "6020",
    "6021",
    "6022",
    "6023",
    "6024",
    "6025",
    "6026",
    "6029",
    "6050",
    "6051",
    "6052",
    "6053",
    "6059",
    "6060",
    "6061",
    "6062",
    "6064",
    "6066",
    "6090",
    "6159"

  ],
  // dart normal //"Dart":["4212","4214","4215","4217","4218","4219","4220","4221","4224","4225","4226","4227","4229","4230"],
  //seq
  Matt: [
    "4210",
    "4211",
    "4212",
    "4213",
    "4214",
    "4215",
    "4216",
    "4217",
    "4218",
    "4219",
    "4220",
    "4221",
    "4223",
    "4224",
    "4225",
    "4226",
    "4227",
    "4228",
    "4229",
    "4230",
  ],
//alpha
  Douglas: [
    "2060",
    "2061",
    "2062",
    "2063",
    "2064",
    "2065",
    "2066",
    "2067",
    "2068",
    "2069",
    "2070",
    "2071",
    "2072",
    "2075",
    "2084",
    "2085",
    "2086",
    "2087",
    "2088",
    "2089",
    "2090",
    "2092",
    "2093",
    "2094",
    "2095",
    "2096",
    "2097",
    "2099",
    "2100",
    "2101",
    "2102",
    "2103",
    "2104",
    "2105",
    "2106",
    "2107",
    "2108",
  ],
  Luiz: [
    "2060",
    "2061",
    "2062",
    "2063",
    "2064",
    "2065",
    "2066",
    "2067",
    "2068",
    "2069",
    "2070",
    "2071",
    "2072",
    "2075",
    "2084",
    "2085",
    "2086",
    "2087",
    "2088",
    "2089",
    "2090",
    "2092",
    "2093",
    "2094",
    "2095",
    "2096",
    "2097",
    "2099",
    "2100",
    "2101",
    "2102",
    "2103",
    "2104",
    "2105",
    "2106",
    "2107",
    "2108",
  ],
  Sam:[
    "2000",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2042",
    "2043",
    "2052"
  ],
  Pavel:[
    "2006",
    "2008",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
    "2041",
    "2042",
    "2043",
    "2045",
    "2046",
    "2047",
    "2048",
    "2049",
    "2050",
    "2110",
    "2111",
    "2112",
    "2114",
    "2115",
    "2116",
    "2127",
    "2128",
    "2129",
    "2130",
    "2131",
    "2132",
    "2133",
    "2134",
    "2135",
    "2136",
    "2137",
    "2138",
    "2139",
    "2140",
    "2141",
    "2193",
    "2203",
    "2204",
    "2205",
    "2206",
    "2207",
    "2216",
  ],
  Mark:[
    //"2055",
    "2060",
    "2062",
    "2063",
    "2064",
    "2065",
    "2066",
    "2067",
    "2068",
    "2069",
    "2070",
    "2071",
    "2072",
    "2073",
    "2074",
    "2075",
    "2076",
    "2077",
    "2079",
    "2080",
    "2081",
    "2088",
    "2089",
    "2090",
    "2109",
    "2112",
    "2113",
    "2114",
    "2115",
    "2119",
    "2120",
    "2121",
    "2122"
  ],
  David:[
    "2067",
    "2068",
    "2069",
    "2070",
    "2071",
    "2072",
    "2073",
    "2074",
    "2075",
    "2076",
    "2077",
    "2079",
    "2080",
    "2081",
    "2109",
    "2113",
    "2118",
    "2119",
    "2120",
    "2121",
    "2122",
    "2125",
    "2126",
    "2151",
    "2153",
    "2154",
    "2155",
    "2156",
    "2157",
    "2158",
    "2159",
    "2762",
    "2763",
    "2765",
    "2768",
    "2769",
  ],
  Dylan:[
    "2067",
    "2068",
    "2069",
    "2070",
    "2071",
    "2072",
    "2073",
    "2074",
    "2075",
    "2076",
    "2077",
    "2079",
    "2080",
    "2081",
    "2109",
    "2113",
    "2117",
    "2118",
    "2119",
    "2120",
    "2121",
    "2122",
    "2125",
    "2126",
    "2145",
    "2146",
    "2147",
    "2148",
    "2150",
    "2151",
    "2152",
    "2153",
    "2154",
    "2759",
    "2760",
    "2761", //todo ADD TO MAP
    "2762",
    "2763",
    "2765",
    "2767",
    "2768",
    "2769",
    "2770" //todo add back to map
  ],
  Ron:[
    "2142",
    "2143",
    "2144",
    "2160",
    "2161",
    "2162",
    "2163",
    "2164",
    "2165",
    "2166",
    "2167",
    "2168",
    "2170",
    "2171",
    "2172",
    "2173",
    "2174",
    "2175",
    "2176",
    "2177",
    "2178",
    "2179",
    "2197",
    "2198",
    "2199",
    "2200",
    "2211",
    "2212",
    "2213",
    "2214",
    "2557",
    "2558",
    "2559",
    "2560",
    "2565",
    "2564",
    "2566",
    "2567",
    "2570",
  ],
  Tony:[
    "2000",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
    "2041",
    "2042",
    "2043",
    "2044",
    "2045",
    "2046",
    "2047",
    "2048",
    "2049",
    "2050",
    "2052",
    "2060",
    "2061",
    "2062",
    "2063",
    "2064",
    "2065",
    "2066",
    "2067",
    "2068",
    "2069",
    "2070",
    "2071",
    "2072",
    "2073",
    "2074",
    "2075",
    "2076",
    "2077",
    "2079",
    "2080",
    "2081",
    "2082",
    "2084",
    "2085",
    "2086",
    "2087",
    "2088",
    "2089",
    "2090",
    "2092",
    "2093",
    "2094",
    "2095",
    "2096",
    "2097",
    "2099",
    "2100",
    "2101",
    "2102",
    "2103",
    "2104",
    "2105",
    "2106",
    "2107",
    "2108",
    "2109",
    "2110",
    "2111",
    "2112",
    "2113",
    "2114",
    "2115",
    "2116",
    "2117",
    "2118",
    "2119",
    "2120",
    "2121",
    "2122",
    "2125",
    "2126",
    "2127",
    "2128",
    "2129",
    "2130",
    "2131",
    "2132",
    "2133",
    "2134",
    "2135",
    "2136",
    "2137",
    "2138",
    "2139",
    "2140",
    "2141",
    "2142",
    "2144",
    "2145",
    "2146",
    "2147",
    "2148",
    "2150",
    "2151",
    "2152",
    "2153",
    "2154",
    "2155",
    "2156",
    "2157",
    "2158",
    "2159",
    "2160",
    "2190",
    "2191",
    "2192",
    "2193",
    "2194",
    "2195",
    "2203",
    "2204",
    "2205",
    "2206",
    "2207",
    "2216",
    "2762",
    "2763",
    "2765",
    "2767",
    "2768",
    "2769"
  ],
  Arpan:[
    "2500",
    "2502",
    "2505",
    "2506",
    "2515",
    "2516",
    "2517",
    "2518",
    "2519",
    "2525",
    "2526",
    "2527",
    "2528",
    "2529",
    "2530",
    "2500",
    "2500",
    "2500",
    "2500"
    
  ]

};
export default techLocations;
