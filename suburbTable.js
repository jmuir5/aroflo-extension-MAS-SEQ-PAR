const suburbTable = {
    //nsw
    "2000": ["HAYMARKET", "PARLIAMENT HOUSE", "SYDNEY", "SYDNEY SOUTH", "THE ROCKS", "DARLING HARBOUR", "DAWES POINT", "MILLERS POINT"],
    "2001": ["SYDNEY"],
    "2002": ["WORLD SQUARE"],
    "2004": ["ALEXANDRIA MC", "EASTERN SUBURBS MC"],
    "2006":["THE UNIVERSITY OF SYDNEY"],
    "2007":["BROADWAY", "ULTIMO"],
    "2008":["DARLINGTON","GOLDEN GROVE","CHIPPENDALE"],
    "2009":["DARLING ISLAND","PYRMONT"],
    "2010":["DARLINGHURST","SURRY HILLS","TAYLOR SQUARE"],
    "2011":["KINGS CROSS","POTTS POINT","ELIZABETH BAY","HMAS KUTTABUL","RUSHCUTTERS BAY","WOOLLOOMOOLOO"],
    "2012": ["STRAWBERRY HILLS"],
    "2013": ["STRAWBERRY HILLS"],
    "2015":["ALEXANDRIA","BEACONSFIELD","EVELEIGH"],
    "2016":["REDFERN"],
    "2017":["WATERLOO","ZETLAND"],
    "2018":["ROSEBERY","EASTLAKES" ],
    "2019":["BANKSMEADOW","BOTANY"],
    "2020": ["MASCOT", "SYDNEY DOMESTIC AIRPORT", "SYDNEY INTERNATIONAL AIRPORT"],
    "2021": ["CENTENNIAL PARK", "MOORE PARK", "PADDINGTON"],
    "2022": ["BONDI JUNCTION PLAZA", "BONDI JUNCTION", "QUEENS PARK"],
    "2023": ["BELLEVUE HILL"],
    "2024": ["BRONTE", "WAVERLEY", "CHARING CROSS"],
    "2025": ["WOOLLAHRA"],
    "2026": ["BEN BUCKLER", "BONDI", "BONDI BEACH", "NORTH BONDI", "TAMARAMA"],
    "2027": ["DARLING POINT", "EDGECLIFF", "HMAS RUSHCUTTERS", "POINT PIPER"],
    "2028": ["DOUBLE BAY"],
    "2029": ["ROSE BAY"],
    "2030": ["DIAMOND BAY", "DOVER HEIGHTS", "HMAS WATSON", "ROSE BAY NORTH", "VAUCLUSE", "WATSONS BAY"],
    "2031": ["CLOVELLY", "CLOVELLY WEST", "RANDWICK", "ST PAULS"],
    "2032": ["KINGSFORD", "DACEYVILLE"],
    "2033": ["KENSINGTON"],
    "2034": ["COOGEE", "SOUTH COOGEE"],
    "2035": ["MAROUBRA", "MAROUBRA SOUTH", "PAGEWOOD"],
    "2036": ["CHIFLEY", "EASTGARDENS", "HILLSDALE", "LA PEROUSE", "LITTLE BAY", "MALABAR", "MATRAVILLE", "PHILLIP BAY", "PORT BOTANY"],
    "2037": ["GLEBE", "FOREST LODGE"],
    "2038": ["ANNANDALE"],
    "2039": ["ROZELLE"],
    "2040": ["LEICHHARDT", "LILYFIELD"],
    "2041": ["BALMAIN", "BALMAIN EAST", "BIRCHGROVE"],
    "2042": ["ENMORE", "NEWTOWN"],
    "2043": ["ERSKINEVILLE"],
    "2044": ["ST PETERS", "SYDENHAM", "TEMPE"],
    "2045": ["HABERFIELD"],
    "2046": ["CANADA BAY", "ABBOTSFORD", "CHISWICK", "FIVE DOCK", "RODD POINT", "RUSSELL LEA", "WAREEMBA"],
    "2047": ["DRUMMOYNE"],
    "2048": ["STANMORE", "WESTGATE"],
    "2049": ["LEWISHAM", "PETERSHAM", "PETERSHAM NORTH"],
    "2050": ["CAMPERDOWN", "MISSENDEN ROAD"],
    "2052": ["UNEW SOUTH WALES SYDNEY"],
    "2060": ["NORTH SYDNEY", "HMAS PLATYPUS", "HMAS WATERHEN", "LAVENDER BAY", "MCMAHONS POINT", "NORTH SYDNEY SHOPPINGWORLD", "WAVERTON"],
    "2061": ["MILSONS POINT", "KIRRIBILLI"],
    "2062": ["CAMMERAY"],
    "2063": ["NORTHBRIDGE"],
    "2064": ["ARTARMON"],
    "2065": ["CROWS NEST", "ST LEONARDS", "GORE HILL", "GREENWICH", "NAREMBURN", "ROYAL NORTH SHORE HOSPITAL", "WOLLSTONECRAFT"],
    "2066": ["LANE COVE", "NORTHWOOD", "OSBORNE PARK", "RIVERVIEW", "LANE COVE NORTH", "LANE COVE WEST", "LINLEY POINT", "LONGUEVILLE"],
    "2067": ["CHATSWOOD WEST", "CHATSWOOD"],
    "2068": ["CASTLECRAG", "WILLOUGHBY", "MIDDLE COVE", "WILLOUGHBY NORTH"],
    "2069": ["CASTLE COVE", "ROSEVILLE", "ROSEVILLE CHASE"],
    "2070": ["EAST LINDFIELD", "LINDFIELD", "LINDFIELD WEST"],
    "2071": ["KILLARA"],
    "2072": ["GORDON"],
    "2073": ["PYMBLE", "WEST PYMBLE"],
    "2074": ["BOBBIN HEAD", "NORTH TURRAMURRA", "SOUTH TURRAMURRA", "TURRAMURRA", "WARRAWEE"],
    "2075": ["NORTH ST IVES", "ST IVES", "ST IVES CHASE"],
    "2076": ["NORMANHURST", "WAHROONGA"],
    "2077": ["ASQUITH", "HORNSBY", "HORNSBY HEIGHTS", "WAITARA"],
    "2079": ["MOUNT COLAH"],
    "2080": ["MOUNT KURING-GAI"],
    "2081": ["BEROWRA", "COWAN"],
    "2082": ["BEROWRA HEIGHTS", "BEROWRA WATERS"],
    "2083": ["BAR POINT", "BROOKLYN", "COGRA BAY", "DANGAR ISLAND", "MILSONS PASSAGE", "MOONEY MOONEY"],
    "2084": ["AKUNA BAY", "COTTAGE POINT", "DUFFYS FOREST", "TERREY HILLS"],
    "2085": ["BELROSE", "BELROSE WEST", "DAVIDSON"],
    "2086": ["FRENCHS FOREST", "FRENCHS FOREST EAST"],
    "2087": ["FORESTVILLE", "KILLARNEY HEIGHTS"],
    "2088": ["MOSMAN", "SPIT JUNCTION"],
    "2089": ["NEUTRAL BAY", "NEUTRAL BAY JUNCTION"],
    "2090": ["CREMORNE", "CREMORNE JUNCTION","CREMORNE POINT"],
    "2091": ["HMAS PENGUIN"],
    "2092": ["SEAFORTH"],
    "2093": ["BALGOWLAH", "BALGOWLAH HEIGHTS", "CLONTARF", "MANLY VALE", "NORTH BALGOWLAH"],
    "2094": ["FAIRLIGHT"],
    "2095": ["MANLY", "MANLY EAST"],
    "2096": ["QUEENSCLIFF", "CURL CURL", "HARBORD"],
    "2097": ["COLLAROY", "COLLAROY BEACH", "COLLAROY PLATEAU WEST", "LONG REEF", "WHEELER HEIGHTS"],
    "2099": ["CROMER", "CROMER HEIGHTS", "DEE WHY", "DEE WHY BEACH", "NARRAWEENA", "NORTH CURL CURL", "WINGALA"],
    "2100": ["ALLAMBIE", "ALLAMBIE HEIGHTS", "BEACON HILL", "BROOKVALE", "NORTH MANLY", "OXFORD FALLS", "WARRINGAH MALL"],
    "2101": ["INGLESIDE", "ELANORA HEIGHTS", "NARRABEEN", "NARRABEEN PENINSULA", "NORTH NARRABEEN"],
    "2102": ["WARRIEWOOD", "WARRIEWOOD SHOPPING SQUARE"],
    "2103": ["MONA VALE"],
    "2104": ["BAYVIEW"],
    "2105": ["CHURCH POINT", "ELVINA BAY", "LOVETT BAY", "SCOTLAND ISLAND"],
    "2106": ["NEWPORT", "NEWPORT BEACH"],
    "2107": ["AVALON BEACH", "BILGOLA", "BILGOLA BEACH", "BILGOLA PLATEAU", "CAREEL BAY", "CLAREVILLE", "AVALON", "PARADISE BEACH", "TAYLORS POINT", "WHALE BEACH"],
    "2108": ["PALM BEACH", "THE BASIN", "COASTERS RETREAT", "CURRAWONG BEACH", "GREAT MACKEREL BEACH", "MORNING BAY"],
    "2109": ["MACQUARIE UNIVERSITY"],
    "2110": ["HUNTERS HILL", "HUNTERS HILL WEST", "WOOLWICH"],
    "2111": ["BORONIA PARK", "GLADESVILLE", "HENLEY", "HUNTLEYS COVE", "HUNTLEYS POINT", "MONASH PARK", "TENNYSON POINT"],
    "2112": ["RYDE", "DENISTONE EAST", "PUTNEY"],
    "2113": ["BLENHEIM ROAD", "EAST RYDE", "MACQUARIE CENTRE", "MACQUARIE PARK", "NORTH RYDE"],
    "2114": ["MEADOWBANK", "MELROSE PARK", "WEST RYDE", "DENISTONE", "DENISTONE WEST"],
    "2115": ["ERMINGTON"],
    "2116": ["RYDALMERE"],
    "2117": ["DUNDAS", "OATLANDS", "DUNDAS VALLEY", "TELOPEA"],
    "2118": ["CARLINGFORD", "CARLINGFORD COURT", "CARLINGFORD NORTH", "KINGSDENE"],
    "2119": ["BEECROFT", "CHELTENHAM"],
    "2120": ["PENNANT HILLS", "THORNLEIGH", "WESTLEIGH"],
    "2121": ["EPPING", "NORTH EPPING"],
    "2122": ["EASTWOOD", "MARSFIELD"],
    "2123": ["PARRAMATTA"],
    "2124": ["PARRAMATTA"],
    "2125": ["WEST PENNANT HILLS"],
    "2126": ["CHERRYBROOK"],
    "2127": ["NEWINGTON", "HOMEBUSH BAY"],
    "2128": ["SILVERWATER"],
    "2129": ["SYDNEY MARKETS"],
    "2130": ["SUMMER HILL"],
    "2131": ["ASHFIELD"],
    "2132": ["CROYDON"],
    "2133": ["CROYDON PARK", "ENFIELD SOUTH"],
    "2134": ["BURWOOD NORTH", "BURWOOD"],
    "2135": ["STRATHFIELD"],
    "2136": ["BURWOOD HEIGHTS", "ENFIELD", "STRATHFIELD SOUTH"],
    "2137": ["BREAKFAST POINT", "CABARITA", "MORTLAKE", "CONCORD", "NORTH STRATHFIELD"],
    "2138": ["CONCORD WEST", "LIBERTY GROVE", "RHODES"],
    "2139": ["CONCORD REPATRIATION HOSPITAL"],
    "2140": ["HOMEBUSH", "HOMEBUSH SOUTH", "HOMEBUSH WEST"],
    "2141": ["BERALA", "LIDCOMBE", "LIDCOMBE NORTH", "ROOKWOOD"],
    "2142": ["BLAXCELL", "CAMELLIA", "GRANVILLE", "HOLROYD", "ROSEHILL"],
    "2143": ["BIRRONG", "REGENTS PARK", "POTTS HILL"],
    "2144": ["AUBURN", "AUBURN SOUTH"],
    "2145": ["GIRRAWEEN", "GREYSTANES", "MAYS HILL", "PEMULWUY", "PENDLE HILL", "SOUTH WENTWORTHVILLE", "WENTWORTHVILLE", "WESTMEAD"],
    "2146": ["TOONGABBIE", "OLD TOONGABBIE", "TOONGABBIE EAST"],
    "2147": ["SEVEN HILLS", "KINGS LANGLEY", "LALOR PARK", "SEVEN HILLS WEST"],
    "2148": ["ARNDELL PARK", "BLACKTOWN", "BLACKTOWN WESTPOINT", "KINGS PARK", "PROSPECT", "HUNTINGWOOD", "MARAYONG"],
    "2150": ["PARRAMATTA", "HARRIS PARK", "PARRAMATTA WESTFIELD"],
    "2151": ["NORTH PARRAMATTA", "NORTH ROCKS"],
    "2152": ["NORTHMEAD"],
    "2153": ["BELLA VISTA", "BAULKHAM HILLS", "CRESTWOOD", "WINSTON HILLS"],
    "2154": ["CASTLE HILL"],
    "2155": ["BEAUMONT HILLS", "KELLYVILLE", "KELLYVILLE RIDGE", "ROUSE HILL"],
    "2156": ["ANNANGROVE", "GLENHAVEN", "KENTHURST"],
    "2157": ["CANOELANDS", "FOREST GLEN", "HILLSIDE", "GLENORIE"],
    "2158": ["DURAL", "MIDDLE DURAL", "ROUND CORNER"],
    "2159": ["BERRILEE", "ARCADIA", "FIDDLETOWN", "GALSTON"],
    "2160": ["MERRYLANDS", "MERRYLANDS WEST"], 
    "2161": ["GUILDFORD", "GUILDFORD WEST", "OLD GUILDFORD", "YENNORA"],
    "2162": ["CHESTER HILL", "SEFTON"],
    "2163": ["CARRAMAR", "LANSDOWNE", "VILLAWOOD"],
    "2164": ["SMITHFIELD", "SMITHFIELD WEST", "WETHERILL PARK", "WOODPARK"],
    "2165": ["FAIRFIELD", "FAIRFIELD EAST", "FAIRFIELD HEIGHTS", "FAIRFIELD WEST"],
    "2166": ["CABRAMATTA", "CABRAMATTA WEST", "CANLEY HEIGHTS", "CANLEY VALE", "LANSVALE"],
    "2167": ["GLENFIELD"],
    "2168": ["ASHCROFT", "BUSBY", "CARTWRIGHT", "GREEN VALLEY", "HINCHINBROOK", "HECKENBERG", "MILLER", "SADLEIR"],
    "2170": ["CASULA", "CASULA MALL", "CHIPPING NORTON", "LIVERPOOL", "MOOREBANK", "HAMMONDVILLE", "LIVERPOOL SOUTH", "LIVERPOOL WESTFIELD", "LURNEA", "MOUNT PRITCHARD", "PRESTONS", "WARWICK FARM"],
    "2171": ["CECIL HILLS", "HORNINGSEA PARK", "HOXTON PARK", "WEST HOXTON"],
    "2172": ["SANDY POINT", "PLEASURE POINT", "VOYAGER POINT"],
    "2173": ["WATTLE GROVE", "HOLSWORTHY"],
    "2174": ["EDMONDSON PARK", "INGLEBURN MILPO"],
    "2175": ["HORSLEY PARK"],
    "2176": ["ABBOTSBURY", "BOSSLEY PARK", "EDENSOR PARK", "GREENFIELD PARK", "PRAIRIEWOOD", "ST JOHNS PARK", "WAKELEY"],
    "2177": ["BONNYRIGG", "BONNYRIGG HEIGHTS", "WENTWORTH PORT"],
    "2178": ["CECIL PARK", "KEMPS CREEK", "MOUNT VERNON"],
    "2179": ["AUSTRAL", "LEPPINGTON"],
    "2190": ["CHULLORA", "MOUNT LEWIS", "GREENACRE"],
    "2191": ["BELFIELD"],
    "2192": ["BELMORE"],
    "2193": ["ASHBURY", "CANTERBURY", "HURLSTONE PARK"],
    "2194": ["CAMPSIE"],
    "2195": ["LAKEMBA", "WILEY PARK"],
    "2196": ["PUNCHBOWL", "ROSELANDS"],
    "2197": ["BASS HILL"],
    "2198": ["GEORGES HALL"],
    "2199": ["YAGOONA", "YAGOONA WEST"],
    "2200": ["BANKSTOWN AIRPORT", "BANKSTOWN NORTH", "BANKSTOWN SQUARE", "CONDELL PARK", "BANKSTOWN", "MOUNT LEWIS", "MANAHAN"],
    "2203": ["DULWICH HILL"],
    "2204": ["MARRICKVILLE", "MARRICKVILLE METRO", "MARRICKVILLE SOUTH"],
    "2205": ["ARNCLIFFE", "TURRELLA", "WOLLI CREEK"],
    "2206": ["CLEMTON PARK", "EARLWOOD", "UNDERCLIFFE"],
    "2207": ["BARDWELL PARK", "BARDWELL VALLEY", "BEXLEY", "BEXLEY NORTH", "BEXLEY SOUTH"],
    "2208": ["KINGSGROVE", "KINGSWAY WEST"],
    "2209": ["BEVERLY HILLS", "NARWEE"],
    "2210": ["LUGARNO", "PEAKHURST", "PEAKHURST HEIGHTS", "RIVERWOOD"],
    "2211": ["PADSTOW", "PADSTOW HEIGHTS"],
    "2212": ["REVESBY", "REVESBY HEIGHTS", "REVESBY NORTH"],
    "2213": ["PICNIC POINT", "EAST HILLS", "PANANIA"],
    "2214": ["MILPERRA"],
    "2216": ["BANKSIA", "BRIGHTON-LE-SANDS", "KYEEMAGH", "ROCKDALE"],
    "2217": ["BEVERLEY PARK", "KOGARAH", "KOGARAH BAY", "MONTEREY", "RAMSGATE", "RAMSGATE BEACH"],
    "2218": ["ALLAWAH", "CARLTON"],
    "2219": ["SANDRINGHAM", "DOLLS POINT", "SANS SOUCI"],
    "2220": ["HURSTVILLE", "HURSTVILLE GROVE", "HURSTVILLE WESTFIELD"],
    "2221": ["BLAKEHURST", "CARSS PARK", "CONNELLS POINT", "KYLE BAY", "SOUTH HURSTVILLE"],
    "2222": ["PENSHURST"],
    "2223": ["MORTDALE"],
    "2224": ["KANGAROO POINT", "SYLVANIA", "SYLVANIA SOUTHGATE", "SYLVANIA WATERS"],
    "2225": ["CARAVAN HEAD", "OYSTER BAY"],
    "2226": ["BONNET BAY", "COMO", "JANNALI"],
    "2227": ["GYMEA", "GYMEA BAY"],
    "2228": ["MIRANDA", "YOWIE BAY"],
    "2229": ["CARINGBAH", "CARINGBAH SOUTH", "LILLI PILLI", "DOLANS BAY", "PORT HACKING", "TAREN POINT", "WARUMBUL"],
    "2230": ["BUNDEENA", "BURRANEER", "CRONULLA", "MAIANBAR", "WOOLOOWARE"],
    "2231": ["KURNELL"],
    "2232": ["AUDLEY", "SUTHERLAND", "GARIE", "GRAYS POINT", "KAREELA", "KIRRAWEE", "LOFTUS", "WORONORA"],
    "2233": ["HEATHCOTE", "ENGADINE", "WATERFALL", "WORONORA HEIGHTS", "YARRAWARRAH"],
    "2234": ["ALFORDS POINT", "BARDEN RIDGE", "BANGOR", "ILLAWONG", "LUCAS HEIGHTS", "MENAI", "MENAI CENTRAL"],
    "2250": ["BUCKETTY","CALGA","CENTRAL MANGROVE","MOUNT ELLIOT","SPRINGFIELD","DONOVANS FOREST","EAST GOSFORD","ERINA","ERINA FAIR","GLENWORTH VALLEY","GOSFORD","GOSFORD WEST","GREENGROVE","HOLGATE","KARIONG","KULNURA","LISAROW","LOWER MANGROVE","MANGROVE CREEK","MANGROVE MOUNTAIN","MATCHAM","MOONEY MOONEY CREEK","MOUNT WHITE","NARARA","NIAGARA PARK","NORTH GOSFORD","PEATS RIDGE","POINT CLARE","POINT FREDERICK","SOMERSBY","TASCOTT","TEN MILE HOLLOW","UPPER MANGROVE","WENDOREE PARK","WYOMING"],
    "2251": ["AVOCA BEACH","BENSVILLE","BOUDDI","COPACABANA","GREEN POINT","YATTALUNGA","DAVISTOWN","KINCUMBER","KINCUMBER SOUTH","MACMASTERS BEACH","PICKETTS VALLEY","SARATOGA"],
    "2252": ["CENTRAL COAST MC"],
    "2256": ["BLACKWALL", "HORSFIELD BAY", "KOOLEWONG", "LITTLE WOBBY", "PATONGA", "PEARL BEACH", "PHEGANS BAY", "WONDABYNE", "WOY WOY", "WOY WOY BAY"],
    "2257": ["BOOKER BAY", "BOX HEAD", "DALEYS POINT", "EMPIRE BAY", "ETTALONG BEACH", "HARDYS BAY", "KILLCARE", "KILLCARE HEIGHTS", "PRETTY BEACH", "ST HUBERTS ISLAND", "UMINA BEACH", "WAGSTAFFE"],
    "2258": ["PALM GROVE", "PALMDALE", "FOUNTAINDALE", "KANGY ANGY", "OURIMBAH"],
    "2259": ["CEDAR BRUSH CREEK", "CHAIN VALLEY BAY", "CRANGAN BAY", "ALISON", "ROCKY POINT", "DOORALONG", "DURREN DURREN", "FRAZER PARK", "GWANDALAN", "HALLORAN", "HAMLYN TERRACE", "JILLIBY", "KANWAL", "LAKE MUNMORAH", "LEMON TREE", "LITTLE JILLIBY", "MANNERING PARK", "MARDI", "POINT WOLSTONCROFT", "RAVENSDALE", "SOUTH TACOMA", "SUMMERLAND POINT", "TACOMA", "TUGGERAH", "TUGGERAWONG", "WADALBA", "WALLARAH", "WARNERVALE", "WATANOBBI", "WOONGARRAH", "WYBUNG", "WYEE", "WYEE POINT", "WYONG", "WYONG CREEK", "WYONGAH", "YARRAMALONG"],
    "2260": ["ERINA HEIGHTS", "FORRESTERS BEACH", "NORTH AVOCA", "TERRIGAL", "WAMBERAL"],
    "2261": ["BATEAU BAY", "BAY VILLAGE", "BERKELEY VALE", "BLUE BAY", "CHITTAWAY BAY", "CHITTAWAY POINT", "SHELLY BEACH", "GLENNING VALLEY", "KILLARNEY VALE", "LONG JETTY", "THE ENTRANCE", "THE ENTRANCE NORTH", "TOOWOON BAY", "TUMBI UMBI"],
    "2263": ["CANTON BEACH", "CHARMHAVEN", "GOROKAN", "LAKE HAVEN", "NORAH HEAD", "NORAVILLE", "TOUKLEY"],
    "2264": ["BALCOLYN", "BONNELLS BAY", "BRIGHTWATERS", "MIRRABOOKA", "SILVERWATER", "SUNSHINE", "DORA CREEK", "ERARING", "MANDALONG", "MORISSET", "MORISSET PARK", "MYUNA BAY", "WINDERMERE PARK", "YARRAWONGA PARK"],
    "2265": ["COORANBONG", "MARTINSVILLE"],
    "2267": ["WANGI WANGI"],
    "2278": ["BARNSLEY", "KILLINGWORTH", "WAKEFIELD"],
    "2280": ["BELMONT NORTH", "BELMONT SOUTH", "BELMONT", "VALENTINE", "CROUDACE BAY", "FLORAVILLE", "JEWELLS", "MARKS POINT"],
    "2281": ["BLACKSMITHS", "CAM'S WHARF", "CATHERINE HILL BAY", "CAVES BEACH", "SWANSEA", "LITTLE PELICAN", "MIDDLE CAMP", "NORDS WHARF", "PELICAN", "SWANSEA HEADS"],
    "2282": ["LAKELANDS", "ELEEBANA", "WARNERS BAY"],
    "2283": ["ARCADIA VALE", "AWABA", "BLACKALLS PARK", "BOLTON POINT", "BUTTABA", "CAREY BAY", "COAL POINT", "BALMORAL", "FASSIFERN", "FENNELL BAY", "FISHING POINT", "KILABEN BAY", "RATHMINES", "RYHOPE", "TORONTO"],
    "2284": ["ARGENTON", "BOOLAROO", "BOORAGUL", "MARMONG POINT", "SPEERS POINT", "TERALBA", "WOODRISING"],
    "2285": ["CAMERON PARK", "CARDIFF HEIGHTS", "CARDIFF SOUTH", "CARDIFF", "GLENDALE", "EDGEWORTH", "MACQUARIE HILLS"],
    "2286": ["HOLMESVILLE", "SEAHAMPTON", "WEST WALLSEND"],
    "2287": ["BIRMINGHAM GARDENS", "SUMMER HILL", "ELERMORE VALE", "FLETCHER", "MARYLAND", "MINMI", "RANKIN PARK", "WALLSEND", "WALLSEND SOUTH"],
    "2289": ["ADAMSTOWN", "ADAMSTOWN HEIGHTS", "HIGHFIELDS", "GARDEN SUBURB", "KOTARA", "KOTARA FAIR", "KOTARA SOUTH"],
    "2290": ["BENNETTS GREEN", "CHARLESTOWN", "HILLSBOROUGH", "MOUNT HUTTON", "DUDLEY", "GATESHEAD", "KAHIBAH", "REDHEAD", "TINGIRA HEIGHTS", "WHITEBRIDGE"],
    "2291": ["MEREWETHER", "MEREWETHER HEIGHTS", "THE JUNCTION"],
    "2292": ["BROADMEADOW", "HAMILTON NORTH"],
    "2293": ["WICKHAM", "MARYVILLE"],
    "2294": ["CARRINGTON"],
    "2295": ["STOCKTON", "FERN BAY"],
    "2296": ["ISLINGTON"],
    "2297": ["TIGHES HILL"],
    "2298": ["GEORGETOWN", "WARATAH", "WARATAH WEST"],
    "2299": ["JESMOND"],
    "2300": ["BAR BEACH", "COOKS HILL", "NEWCASTLE", "NEWCASTLE EAST", "THE HILL"],
    "2302": ["NEWCASTLE WEST"],
    "2303": ["HAMILTON", "HAMILTON EAST", "HAMILTON SOUTH"],
    "2304": ["MAYFIELD", "SANDGATE", "KOORAGANG", "MAYFIELD EAST", "MAYFIELD NORTH", "MAYFIELD WEST", "WARABROOK"],
    "2305": ["KOTARA EAST", "NEW LAMBTON", "NEW LAMBTON HEIGHTS"],
    "2306": ["WINDALE"],
    "2307": ["SHORTLAND"],
    "2308": ["CALLAGHAN", "NEWCASTLE UNIVERSITY"],
    "2309": ["DANGAR"],
    "2310": ["HUNTER REGION MC"],
    "2311": ["ALLYNBROOK", "BINGLEBURRA", "BONNINGTON PARK", "CARRABOLLA", "EAST GRESFORD", "ECCLESTON", "GRESFORD", "HALTON", "LEWINSBROOK", "LOSTOCK", "MOUNT RIVERS"],
    "2312": ["NABIAC"],
    "2314": ["WILLIAMTOWN RAAF"],
    "2315": ["CORLETTE", "NELSON BAY", "SHOAL BAY", "FINGAL BAY", "GAN GAN"],
    "2316": ["ANNA BAY", "BOBS FARM", "BOAT HARBOUR", "ONE MILE", "TAYLORS BEACH", "FISHERMANS BAY"],
    "2317": ["SALAMANDER BAY", "SOLDIERS POINT"],
    "2318": ["CAMPVALE", "OYSTER COVE", "FERODALE", "FULLERTON COVE", "MEDOWIE", "SALT ASH", "WILLIAMTOWN"],
    "2319": ["LEMON TREE PASSAGE", "MALLABULA", "TANILBA BAY"],
    "2320": ["ABERGLASSLYN", "ANAMBAH", "BOLWARRA HEIGHTS", "ALLANDALE", "BOLWARRA", "HILLSBOROUGH", "MAITLAND", "MELVILLE", "ROSEBROOK", "FARLEY", "GLEN OAK", "GOSFORTH", "HORSESHOE BEND", "KEINBAH", "LARGS", "LORN", "LOUTH PARK", "MAITLAND NORTH", "MAITLAND VALE", "MINDARIBBA", "MOUNT DEE", "OAKHAMPTON", "OAKHAMPTON HEIGHTS", "POKOLBIN", "ROTHBURY", "RUTHERFORD", "SOUTH MAITLAND", "TELARAH", "WALLALONG", "WINDELLA"],
    "2321": ["BERRY PARK", "BUTTERWICK", "CLARENCE TOWN", "CLIFTLEIGH", "IONA", "WINDERMERE", "WOODVILLE", "DUCKENFIELD", "DUNS CREEK", "GILLIESTON HEIGHTS", "GLEN MARTIN", "GLEN WILLIAM", "HARPERS HILL", "HEDDON GRETA", "HINTON", "LOCHINVAR", "LUSKINTYRE", "MORPETH", "OSWALD", "PHOENIX PARK", "RAWORTH", "WOERDEN"],
    "2322": ["BERESFIELD", "BLACK HILL", "HEXHAM", "THORNTON", "LENAGHAN", "STOCKRINGTON", "TARRO", "TOMAGO", "WOODBERRY"],
    "2323": ["ASHTONFIELD", "BRUNKERVILLE", "BUTTAI", "BUCHANAN", "GREENHILLS", "EAST MAITLAND", "FREEMANS WATERHOLE", "METFORD", "METFORD DC", "MOUNT VINCENT", "MULBRING", "PITNACREE", "TENAMBIT"],
    "2324": ["BALICKERA", "BRANDY HILL", "BUNDABAH", "CELLS RIVER", "CARRINGTON", "LIMEBURNERS CREEK", "OSTERLEY", "SWAN BAY", "WALLAROO", "EAGLETON", "EAST SEAHAM", "HAWKS NEST", "HEATHERBRAE", "KARUAH", "MILLERS FOREST", "MOTTO FARM", "NELSONS PLAINS", "NORTH ARM COVE", "PINDIMAR", "RAYMOND TERRACE", "RAYMOND TERRACE EAST", "SEAHAM", "TAHLEE", "TEA GARDENS", "TWELVE MILE CREEK"],
    "2325": ["ABERDARE", "ABERNETHY", "BELLBIRD", "CESSNOCK", "CESSNOCK WEST", "CONGEWAI", "BOREE", "CEDAR CREEK", "YALLAMBIE", "ELLALONG", "ELRINGTON", "KEARSLEY", "KITCHENER", "LAGUNA", "LOVEDALE", "MILLFIELD", "MOOTAI", "MOUNT VIEW", "NARONE CREEK", "NULKABA", "PAXTON", "PAYNES CROSSING", "PELTON", "QUORROBOLONG", "SWEETMANS CREEK", "WATAGAN", "WOLLOMBI"],
    "2326": ["ABERMAIN", "BISHOPS BRIDGE", "WESTON", "LOXFORD", "NEATH", "SAWYERS GULLY"],
    "2327": ["KURRI KURRI", "PELAW MAIN", "STANFORD MERTHYR"],
    "2328": ["BUREEN", "DALSWINTON", "DENMAN", "GIANTS CREEK", "HOLLYDEEN", "KERRABEE", "MANGOOLA", "MARTINDALE", "WIDDEN", "YARRAWA"],
    "2329": ["BORAMBIL", "CASSILIS", "MERRIWA", "UARBRY"],
    "2330": ["APPLETREE FLAT", "BIG RIDGE", "BOWMANS CREEK", "BRIDGMAN", "CARROWBROOK", "COMBO", "BROKE", "BULGA", "CAMBERWELL", "CLYDESDALE", "DARLINGTON", "DUNOLLY", "DURAL", "GOWRIE", "GREENLANDS", "HOWICK", "LONG POINT", "MOUNT OLIVE", "RAVENSWORTH", "REEDY CREEK", "SINGLETON", "ST CLAIR", "WESTBROOK", "DOYLES CREEK", "DYRRING", "FALBROOK", "FERN GULLY", "FORDWICH", "GARLAND VALLEY", "GLENDON", "GLENDONBROOK", "GLENNIES CREEK", "GLENRIDDING", "GOORANGOOLA", "GOULDSVILLE", "HAMBLEDON HILL", "HEBDEN", "HOWES VALLEY", "HUNTERVIEW", "JERRYS PLAINS", "LEMINGTON", "MAISON DIEU", "MCDOUGALLS HILL", "MIDDLE FALBROOK", "MILBRODALE", "MIRANNIE", "MITCHELLS FLAT", "MOUNT ROYAL", "MOUNT THORLEY", "OBANVALE", "PUTTY", "REDBOURNBERRY", "RIXS CREEK", "ROUGHIT", "SCOTTS FLAT", "SEDGEFIELD", "SINGLETON HEIGHTS", "WARKWORTH", "WATTLE PONDS", "WHITTINGHAM", "WOLLEMI", "WYLIES FLAT"],
    "2331": ["SINGLETON MILPO"],
    "2333": ["BAERAMI", "BAERAMI CREEK", "BENGALLA", "CASTLE ROCK", "EDDERTON", "GUNGAL", "KAYUGA", "LIDDELL", "MANOBALAI", "MCCULLYS GAP", "MUSCLE CREEK", "MUSWELLBROOK", "SANDY HOLLOW", "WYBONG"],
    "2334": ["GRETA"],
    "2335": ["BELFORD", "BRANXTON", "DALWOOD", "ELDERSLIE", "LAMBS VALLEY", "STANHOPE", "LECONFIELD", "LOWER BELFORD", "NORTH ROTHBURY"],
    "2336": ["DARTBROOK", "DAVIS CREEK", "ABERDEEN", "ROSSGOLE", "ROUCHEL", "ROUCHEL BROOK", "UPPER DARTBROOK", "UPPER ROUCHEL"],
    "2337": ["BELLTREES", "BRAWBOY", "BUNNAN", "DRY CREEK", "GLENROCK", "PARKVILLE", "ELLERSTON", "GLENBAWN", "GUNDY", "KARS SPRINGS", "MIDDLE BROOK", "MOOBI", "MOONAN BROOK", "MOONAN FLAT", "OMADALE", "OWENS GAP", "PAGES CREEK", "SATUR", "SCONE", "SEGENHOE", "STEWARTS BROOK", "TOMALLA", "WAVERLY", "WINGEN", "WOOLOOMA"],
    "2338": ["ARDGLEN", "BLANDFORD", "CRAWNEY", "SANDY CREEK", "SCOTTS CREEK", "TIMOR", "GREEN CREEK", "MURRURUNDI", "PAGES RIVER"],
    "2339": ["BIG JACKS CREEK", "BRAEFIELD", "CHILCOTTS CREEK", "CATTLE CREEK", "LITTLE JACKS CREEK", "MACDONALDS CREEK", "PARRAWEENA", "WARRAH", "WARRAH CREEK", "WILLOW TREE"],
    "2340": ["APPLEBY", "BECTIVE", "BITHRAMERE", "BOWLING ALLEY POINT", "CALALA", "CARROLL", "DARUKA", "GOWRIE", "HANGING ROCK", "KINGSWOOD", "SOMERTON", "WESTDALE", "DUNGOWAN", "EAST TAMWORTH", "GIDLEY", "GOONOO GOONOO", "HALLSVILLE", "HILLVUE", "KEEPIT", "LOOMBERAH", "MOORE CREEK", "NEMINGHA", "NORTH TAMWORTH", "NUNDLE", "OGUNBIL", "OXLEY VALE", "PIALLAMORE", "TAMINDA", "TAMWORTH", "TAMWORTH SOUTH", "TIMBUMBURI", "WALLAMORE", "WARRAL", "WEABONGA", "WEST TAMWORTH", "WOOLOMIN"],
    "2341": ["WERRIS CREEK"],
    "2342": ["CURRABUBULA", "PIALLAWAY"],
    "2343": ["BLACKVILLE", "BUNDELLA", "CAROONA", "COLLY BLUE", "COOMOO COOMOO", "PINE RIDGE", "QUIPOLLY", "QUIRINDI", "SPRING RIDGE", "WALLABADAH", "WARRAH RIDGE", "WINDY", "YANNERGEE"],
    "2344": ["WINTON", "DURI"],
    "2345": ["ATTUNGA", "GARTHOWEN"],
    "2346": ["HALLS CREEK", "KLORI", "MANILLA", "UPPER MANILLA"],
    "2347": ["BARRABA", "CARODA", "COBBADAH", "BANOON", "IRONBARK", "RED HILL", "GULF CREEK", "GUNDAMULDA", "HORTON VALLEY", "LINDESAY", "LONGARM", "MAYVALE", "THIRLOENE", "WOODSREEF"],
    "2348": ["NEW ENGLAND MC"],
    "2350": ["ABERFOYLE", "ACACIA PARK", "ARMIDALE", "BEN VENUE", "CASTLE DOYLE", "COMMISSIONERS WATERS", "DANGARSLEIGH", "DONALD CREEK", "ABINGTON", "ARGYLE", "BONA VISTA", "BOOROLONG", "DUMARESQ", "ENMORE", "HILLGROVE", "LYNDHURST", "DUVAL", "EAST ARMIDALE", "INVERGOWRIE", "JEOGLA", "KELLYS PLAINS", "MADGWICK", "METZ", "NEWLING", "NORTH HILL", "PUDDLEDOCK", "SAUMAREZ", "SAUMAREZ PONDS", "SOUDAN HEIGHTS", "SOUTH HILL", "ST PATRICKS", "THALGARRAH", "TILBUSTER", "WARDS MISTAKE", "WEST ARMIDALE", "WOLLOMOMBI", "WONGWIBINDA"],
    "2351": ["UNIVERSITY OF NEW ENGLAND"],
    "2352": ["KOOTINGAL", "LIMBRI", "MULLA CREEK", "TINTINHULL"],
    "2353": ["MOONBI"],
    "2354": ["BRANGA PLAINS", "KENTUCKY", "KENTUCKY SOUTH", "MOONA PLAINS", "NIANGALA", "NOWENDOC", "UPPER YARROWITCH", "WALCHA", "WOLLUN", "WOOLBROOK", "YARROWITCH"],
    "2355": ["BENDEMEER", "RETREAT", "WATSONS CREEK"],
    "2356": ["GWABEGAR"],
    "2357": ["BUGALDIE", "COONABARABRAN", "PURLEWAUGH", "ROCKY GLEN", "ULAMAMBRI", "YEARINAN"],
    "2358": ["ARDING", "BALALA", "BAKERS CREEK", "ENMORE", "TORRYBURN", "GOSTWYCK", "KINGSTOWN", "MIHI", "ROCKY RIVER", "SALISBURY PLAINS", "URALLA", "YARROWYCK"],
    "2359": ["BUNDARRA", "CAMERONS CREEK"],
    "2360": ["AUBURN VALE", "BUKKULLA", "CHERRY TREE HILL", "COPETON", "KINGS PLAINS", "LONG PLAIN", "NEWSTEAD", "OAKWOOD", "PARADISE", "SAPPHIRE", "ELSMORE", "GILGAI", "GRAMAN", "GUM FLAT", "HOWELL", "INVERELL", "LITTLE PLAIN", "MOUNT RUSSELL", "NULLAMANNA", "ROB ROY", "SPRING MOUNTAIN", "STANBOROUGH", "SWANBROOK", "WALLANGRA"],
    "2361": ["ATHOLWOOD", "ASHFORD", "BONSHAW", "LIMESTONE", "PINDAROI"],
    "2365": ["BACKWATER", "BALD BLAIR", "BALDERSLEIGH", "BRIARBROOK", "BROCKLEY", "BRUSHY CREEK", "BASSENDEAN", "BEN LOMOND", "BLACK MOUNTAIN", "BOOROLONG", "GEORGES CREEK", "GLENCOE", "GREEN HILLS", "MOUNT MITCHELL", "TENTERDEN", "THE BASIN", "THE GULF", "FALCONER", "GLEN NEVIS", "GUYRA", "LLANGOTHLIN", "MAYBOLE", "NEW VALLEY", "OBAN", "SOUTH GUYRA", "TUBBAMURRA", "WANDSWORTH"],
    "2369": ["OLD MILL", "STANNIFER", "TINGHA"],
    "2370": ["BALD NOB", "DIEHARD", "DUNDEE", "LAMBS VALLEY", "MORVEN", "STONEHENGE", "FURRACABAD", "GIBRALTAR RANGE", "GLEN ELGIN", "GLEN INNES", "KINGSGATE", "KOOKABOOKRA", "MATHESON", "MOGGS SWAMP", "MOOGEM", "NEWTON BOYD", "PINKETT", "RANGERS VALLEY", "RED RANGE", "REDDESTONE", "SHANNON VALE", "SWAN VALE", "WELLINGROVE", "YARROWFORD"],
    "2371": ["CAPOOMPETA", "DEEPWATER", "ROCKY CREEK", "THE GULF", "TORRINGTON", "EMMAVILLE", "STANNUM", "TENT HILL", "TUNGSTEN", "WELLINGTON VALE", "YELLOW DAM"],
    "2762": ["SCHOFIELDS"],
    "2763": ["ACACIA GARDENS", "QUAKERS HILL"],
    "2768": ["GLENWOOD", "PARKLEA", "STANHOPE GARDENS"],
    "2769": ["THE PONDS"],
    //queensland
    "4112": ["KURABY"],
    "4113": ["EIGHT MILE PLAINS", "FRUITGROVE", "RUNCORN"],
    "4114": ["LOGAN CENTRAL", "LOGAN CITY BC", "LOGAN CITY DC", "KINGSTON", "WOODRIDGE", "TRINDER PARK", "WOODRIDGE EAST"],
    "4115": ["ALGESTER", "PARKINSON"],
    "4116": ["CALAMVALE", "DREWVALE", "STRETTON"],
    "4117": ["BERRINBA", "KARAWATHA"],
    "4118": ["BROWNS PLAINS BC", "BROWNSLEIGH", "FORESTDALE", "HERITAGE PARK", "BROWNS PLAINS", "HILLCREST", "REGENTS PARK"],
    "4119": ["UNDERWOOD"],
    "4120": ["GREENSLOPES", "LORETO HILL", "STONES CORNER"],
    "4121": ["EKIBIN", "HOLLAND PARK", "HOLLAND PARK EAST", "HOLLAND PARK WEST", "MOUNT THOMPSON", "TARRAGINDI", "WELLERS HILL"],
    "4122": ["MANSFIELD BC", "MANSFIELD DC", "MANSFIELD", "WISHART", "MOUNT GRAVATT", "MOUNT GRAVATT EAST", "UPPER MOUNT GRAVATT", "UPPER MOUNT GRAVATT BC"],
    "4123": ["PRIESTS GULLY", "ROCHEDALE", "ROCHEDALE SOUTH"],
    "4124": ["BORONIA HEIGHTS", "GREENBANK", "LYONS", "NEW BEITH"],
    "4125": ["MUNRUBEN", "PARK RIDGE", "PARK RIDGE SOUTH"],
    "4127": ["CHATSWOOD HILLS", "DAISY HILL", "SPRINGWOOD", "PRIESTDALE", "SLACKS CREEK", "SPRINGWOOD BC"],
    "4128": ["KIMBERLEY PARK", "LOGAN HYPERDOME BC", "SHAILER PARK", "TANAH MERAH"],
    "4129": ["LOGANDALE", "LOGANHOLME", "LOGANHOLME BC", "LOGANHOLME DC"],
    "4130": ["CARBROOK", "CORNUBIA"],
    "4212": ["BOYKAMBIL", "HELENSVALE", "HOPE ISLAND", "MONTEREY KEYS", "SANCTUARY COVE", "SANTA BARBARA"],
    "4213": ["AUSTINVILLE", "BONOGIN", "MUDGEERABA", "SPRINGBROOK", "TALLAI", "WORONGARY"],
    "4214": ["ARUNDEL", "ARUNDEL BC", "ARUNDEL DC", "ASHMORE", "ASHMORE CITY", "MOLENDINAR", "PARKWOOD"],
    "4215": ["AUSTRALIA FAIR", "CHIRN PARK", "KEEBRA PARK", "LABRADOR", "SOUTHPORT", "SOUTHPORT BC", "SOUTHPORT PARK", "SUNDALE"],
    "4216": ["ANGLERS PARADISE", "BIGGERA WATERS", "COOMBABAH", "CURRIGEE", "HOLLYWELL", "PARADISE POINT", "PARADISE POINT KEYS", "RUNAWAY BAY", "SOUTH STRADBROKE", "SOVEREIGN ISLANDS"],
    "4217": ["BENOWA", "BUNDALL", "BUNDALL BC", "BUNDALL DC", "CHEVRON ISLAND", "ISLE OF CAPRI", "MAIN BEACH", "GOLD COAST MC", "SORRENTO", "PARADISE ISLAND", "PARADISE WATERS", "SURFERS PARADISE", "THE SPIT"],
    "4218": ["BROADBEACH", "BROADBEACH WATERS", "FLORIDA GARDENS", "MERMAID BEACH", "MERMAID KEYS", "MERMAID WATERS", "MIAMI KEYS", "MOANA PARK", "CYPRESS GARDENS", "NOBBY BEACH", "PACIFIC FAIR", "Q SUPERCENTRE", "RIALTO", "RIO VISTA"],
    "4219": ["WEST BURLEIGH"],
    "4220": ["BURLEIGH BC", "BURLEIGH DC", "BURLEIGH HEADS", "BURLEIGH TOWN", "BURLEIGH WATERS", "MIAMI", "TALLY VALLEY"],
    "4221": ["ELANORA", "PALM BEACH"],
    "4222": ["GRIFFITH UNIVERSITY"],
    "4223": ["CURRUMBIN", "CURRUMBIN DC", "CURRUMBIN VALLEY", "CURRUMBIN WATERS"],
    "4224": ["TUGUN", "TUGUN HEIGHTS"],
    "4225": ["BILINGA", "KIRRA", "COOLANGATTA", "GREENMOUNT", "RAINBOW BAY"],
    "4226": ["CLEAR ISLAND WATERS", "KERRYDALE", "MERRIMAC", "ROBINA", "ROBINA DC"],
    "4227": ["REEDY CREEK", "VARSITY LAKES"],
    "4228": ["INGLESIDE", "TALLEBUDGERA", "TALLEBUDGERA VALLEY"],
    "4229": ["BOND UNIVERSITY"],
    "4230": ["ROBINA TOWN CENTRE"],
    //Western australia
    "6000": ["CITY DELIVERY CENTRE", "PERTH GPO", "PERTH"],
    "6001": ["PERTH"],
    "6003": ["HIGHGATE", "NORTHBRIDGE"],
    "6004": ["EAST PERTH"],
    "6005": ["KINGS PARK", "WEST PERTH"],
    "6006": ["NORTH PERTH"],
    "6007": ["LEEDERVILLE", "WEST LEEDERVILLE"],
    "6008": ["DAGLISH", "SHENTON PARK", "SUBIACO", "SUBIACO EAST"],
    "6009": ["BROADWAY NEDLANDS", "CRAWLEY", "DALKEITH", "NEDLANDS DC", "NEDLANDS"],
    "6010": ["CLAREMONT NORTH", "KARRAKATTA", "MOUNT CLAREMONT", "CLAREMONT", "SWANBOURNE"],
    "6011": ["PEPPERMINT GROVE", "COTTESLOE"],
    "6012": ["MOSMAN PARK"],
    "6014": ["FLOREAT", "FLOREAT FORUM", "JOLIMONT", "WEMBLEY"],
    "6015": ["CITY BEACH"],
    "6016": ["GLENDALOUGH", "MOUNT HAWTHORN"],
    "6017": ["HERDSMAN", "OSBORNE PARK", "OSBORNE PARK DC"],
    "6018": ["CHURCHLANDS", "DOUBLEVIEW", "GWELUP", "GWELUP DC", "INNALOO", "KARRINYUP", "WOODLANDS"],
    "6019": ["SCARBOROUGH", "WEMBLEY DOWNS"],
    "6020": ["CARINE", "MARMION", "NORTH BEACH", "SORRENTO", "WATERMANS BAY"],
    "6021": ["BALCATTA", "STIRLING"],
    "6022": ["HAMERSLEY"],
    "6023": ["DUNCRAIG", "GLENGARRY"],
    "6024": ["GREENWOOD", "WARWICK"],
    "6025": ["KALLAROO", "PADBURY", "CRAIGIE", "HILLARYS"],
    "6026": ["KINGSLEY", "WOODVALE"],
    "6027": ["BELDON", "CONNOLLY", "EDGEWATER", "HEATHRIDGE", "JOONDALUP", "MULLALOO", "OCEAN REEF", "JOONDALUP DC"],
    "6028": ["BURNS BEACH", "CURRAMBINE", "KINROSS", "ILUKA"],
    "6029": ["TRIGG"],
    "6030": ["CLARKSON", "QUINNS ROCKS", "MERRIWA", "MINDARIE", "RIDGEWOOD", "TAMALA PARK"],
    "6031": ["BANKSIA GROVE", "NEERABUP", "CARRAMAR"],
    "6032": ["NOWERGUP"],
    "6033": ["CARABOODA"],
    "6034": ["EGLINTON"],
    "6035": ["YANCHEP"],
    "6036": ["BUTLER", "JINDALEE"],
    "6037": ["TWO ROCKS"],
    "6038": ["ALKIMOS"],
    "6041": ["CARABAN", "GABBADAH", "GUILDERTON", "WOODRIDGE", "WILBINGA"],
    "6042": ["SEABIRD"],
    "6043": ["BRETON BAY", "LEDGE POINT"],
    "6044": ["KARAKIN", "LANCELIN", "NILGEN", "WEDGE ISLAND"],
    "6050": ["COOLBINIA", "MENORA", "MOUNT LAWLEY"],
    "6051": ["MAYLANDS"],
    "6052": ["BEDFORD", "INGLEWOOD"],
    "6053": ["BAYSWATER"],
    "6054": ["EDEN HILL", "KIARA", "LOCKRIDGE", "ASHFIELD", "BASSENDEAN", "BASSENDEAN DC"],
    "6055": ["CAVERSHAM", "HAZELMERE", "HENLEY BROOK", "SOUTH GUILDFORD", "GUILDFORD", "WEST SWAN"],
    "6056": ["BASKERVILLE", "BOYA", "HELENA VALLEY", "JANE BROOK", "KOONGAMIA", "MIDDLE SWAN", "MIDLAND", "MIDVALE", "MILLENDON", "STRATTON", "BELLEVUE", "GREENMOUNT", "HERNE HILL", "RED HILL", "WOODBRIDGE", "SWAN VIEW", "VIVEASH"],
    "6057": ["HIGH WYCOMBE", "MAIDA VALE"],
    "6058": ["FORRESTFIELD"],
    "6059": ["DIANELLA"],
    "6060": ["DOG SWAMP", "JOONDANNA", "TUART HILL", "YOKINE"],
    "6061": ["BALGA", "NOLLAMARA", "MIRRABOOKA", "WESTMINSTER"],
    "6062": ["EMBLETON", "NORANDA", "MORLEY"],
    "6063": ["BEECHBORO"],
    "6064": ["ALEXANDER HEIGHTS", "GIRRAWHEEN", "KOONDOOLA", "MARANGAROO"],
    "6065": ["DARCH", "HOCKING", "KINGSWAY", "LANDSDALE", "MADELEY", "PEARSALL", "SINAGRA", "ASHBY", "GNANGARA", "JANDABUP", "LEXIA", "MARIGINIUP", "MELALEUCA", "PINJAR", "WANGARA DC", "WANNEROO", "TAPPING", "WANGARA"],
    "6066": ["BALLAJURA"],
    "6067": ["CULLACABARDEE"],
    "6068": ["WHITEMAN"],
    "6069": ["BELHUS", "BRIGADOON", "ELLENBROOK", "ELLENBROOK EAST", "THE VINES", "UPPER SWAN"],
    "6070": ["DARLINGTON"],
    "6071": ["GLEN FORREST", "HOVEA"],
    "6072": ["MAHOGANY CREEK"],
    "6073": ["MUNDARING", "MUNDARING DC", "MUNDARING WEIR"],
    "6074": ["SAWYERS VALLEY"],
    "6076": ["BICKLEY", "CARMEL", "GOOSEBERRY HILL", "HACKETTS GULLY", "LESMURDIE", "PAULLS VALLEY", "PICKERING BROOK", "PIESSE BROOK", "KALAMUNDA", "RESERVOIR", "WALLISTON DC", "WALLISTON"],
    "6077": ["GNANGARA"],
    "6078": ["MARIGINIUP", "PINJAR"],
    "6079": ["LEXIA", "MELALEUCA"],
    "6081": ["PARKERVILLE", "STONEVILLE"],
    "6082": ["BAILUP", "MOUNT HELENA"],
    "6083": ["GIDGEGANNUP", "MORANGUP"],
    "6084": ["AVON VALLEY NATIONAL PARK", "BULLSBROOK", "CHITTERING", "LOWER CHITTERING", "WALYUNGA NATIONAL PARK"],
    "6090": ["MALAGA"],
    "6100": ["BURSWOOD", "LATHLAIN", "VICTORIA PARK"],
    "6101": ["CARLISLE", "CARLISLE NORTH", "CARLISLE SOUTH", "EAST VICTORIA PARK"],
    "6102": ["BENTLEY", "BENTLEY DC", "ST JAMES"],
    "6103": ["RIVERVALE"],
    "6104": ["ASCOT", "BELMONT", "REDCLIFFE"],
    "6105": ["KEWDALE", "PERTH AIRPORT", "CLOVERDALE"],
    "6106": ["WELSHPOOL", "WELSHPOOL DC"],
    "6107": ["BECKENHAM", "EAST CANNINGTON", "KENWICK", "CANNINGTON", "QUEENS PARK", "WATTLE GROVE", "WILSON"],
    "6108": ["THORNLIE"],
    "6109": ["MADDINGTON", "ORANGE GROVE"],
    "6110": ["MARTIN", "SOUTHERN RIVER", "GOSNELLS", "HUNTINGDALE"],
    "6111": ["ASHENDON", "CAMILLO", "CANNING MILLS", "CHAMPION LAKES", "KARRAGULLEN", "LESLEY", "ROLEYSTONE", "KELMSCOTT", "KELMSCOTT DC", "WESTFIELD"],
    "6112": ["BEDFORDALE", "FORRESTDALE", "HARRISDALE", "HAYNES", "HILBERT", "MOUNT NASURA", "MOUNT RICHON", "PIARA WATERS", "SEVILLE GROVE", "ARMADALE", "BROOKDALE", "WUNGONG"],
    "6121": ["OAKFORD"],
    "6122": ["BYFORD", "CARDUP", "DARLING DOWNS", "KARRAKUP"],
    "6123": ["MUNDIJONG", "WHITBY"],
    "6124": ["JARRAHDALE"],
    "6125": ["MARDELLA", "HOPELAND", "SERPENTINE"],
    "6126": ["KEYSBROOK"],
    "6147": ["LANGFORD", "LYNWOOD", "PARKWOOD"],
    "6148": ["ROSSMOYNE", "FERNDALE", "RIVERTON", "SHELLEY"],
    "6149": ["LEEMING", "BULL CREEK"],
    "6150": ["BATEMAN", "MURDOCH", "WINTHROP"],
    "6151": ["SOUTH PERTH ANGELO ST", "KENSINGTON", "SOUTH PERTH"],
    "6152": ["KARAWARA", "MANNING", "SALTER POINT", "COMO", "WATERFORD"],
    "6153": ["APPLECROSS NORTH", "ARDROSS", "CANNING BRIDGE APPLECROSS", "APPLECROSS", "BRENTWOOD", "MOUNT PLEASANT"],
    "6154": ["ALFRED COVE", "MYAREE", "BOORAGOON"],
    "6155": ["CANNING VALE", "CANNING VALE SOUTH", "CANNING VALE DC", "WILLETTON"],
    "6156": ["ATTADALE", "MELVILLE", "WILLAGEE", "WILLAGEE CENTRAL"],
    "6157": ["BICTON", "PALMYRA", "PALMYRA DC"],
    "6158": ["EAST FREMANTLE"],
    "6159": ["NORTH FREMANTLE"],
    "6160": ["FREMANTLE"],
    "6161": ["ROTTNEST ISLAND"],
    "6162": ["SOUTH FREMANTLE", "BEACONSFIELD", "WHITE GUM VALLEY"],
    "6163": ["BIBRA LAKE", "COOLBELLUP", "KARDINYA", "NORTH LAKE", "SAMSON", "SPEARWOOD", "BIBRA LAKE DC", "HAMILTON HILL", "HILTON", "O'CONNOR"],
    "6164": ["ATWELL", "AUBIN GROVE", "BANJUP", "BEELIAR", "HAMMOND PARK", "JANDAKOT", "SOUTH LAKE", "SUCCESS", "YANGEBUP"],
    "6165": ["NAVAL BASE", "HOPE VALLEY"],
    "6166": ["HENDERSON", "MUNSTER", "COOGEE", "WATTLEUP"]
}
export default suburbTable;