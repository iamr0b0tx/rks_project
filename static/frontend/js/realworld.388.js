
//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/
var addressPoints = [
[10, 10, "ajx"],
[-17.8210922667, 15.2209316333, "2"],
[-17.8210819833, 15.2213903167, "3"],
[-17.8210881833, 15.2215004833, "3A"],
[-17.8211946833, 15.2213655333, "1"],
[-17.8209458667, 15.2214051333, "5"],
[-17.8208292333, 15.2214174833, "7"],
[-17.8325816, 15.2238798667, "517"],
[-17.8315855167, 15.2279767, "454"],
[-17.8096336833, 15.2221743833, "176"],
[-17.80970685, 15.2221815833, "178"],
[-17.8102146667, 15.2211562833, "190"],
[-17.8088017167, 15.2242227, "156"],
[-17.8112330167, 15.2193425667, "210"],
[-17.8116368667, 15.2193005167, "212"],
[-17.80812645, 15.2255449333, "146"],
[-17.8080231333, 15.2286383167, "125"],
[-17.8089538667, 15.2222222333, "174"],
[-17.8080905833, 15.2275400667, "129"],
[-17.808811, 15.2227592833, "172"],
[-17.80832975, 15.2276898167, "131"],
[-17.8089395333, 15.2281710333, "133"],
[-17.8093421, 15.2274883167, "135"],
[-17.8084820833, 15.22601925, "117"],
[-17.80881015, 15.22622865, "139"],
[-17.8090947667, 15.2263585667, "141"],
[-17.8092962333, 15.2244872333, "147"],
[-17.8091016667, 15.2249140167, "145"],
[-17.8088785167, 15.2253611667, "143"],
[-17.80825965, 15.22530115, "148"],
[-17.80995685, 15.2238554333, "153"],
[-17.80975435, 15.2238417833, "151"],
[-17.80950755, 15.2217912, "149"],
[-17.8092772667, 15.2231980833, "170"],
[-17.8082753833, 15.20672975, "4"],
[-17.8078434833, 15.211822, "56"],
[-17.8081775667, 15.2090812333, "30B"],
[-17.8084588, 15.2058838167, "174"],
[-17.8088788333, 15.2062702833, "15"],
[-17.8091632833, 15.20514875, "182A"],
[-17.8094891167, 15.20384695, "202"],
[-17.8156715667, 15.2034881667, "277"],
[-17.8109189333, 15.2024631, "220"],
[-17.8108164333, 15.2039622, "219"],
[-17.8125773667, 15.2026079667, "238"],
[-17.8125799333, 15.2032824, "241A"],
[-17.8125869, 15.2017423833, "241C"],
[-17.8140266833, 15.2025706, "256"],
[-17.80932, 15.2051094333, "182B"],
[-17.8098799667, 15.2040444167, "197"],
[-17.8094298833, 15.20561245, "189"],
[-17.8172409333, 15.2035291167, "287"],
[-17.8232166667, 15.22452865, "2028"],
[-17.8225024333, 15.2249944667, "2022"],
[-17.82334135, 15.2244748667, "2030"],
[-17.8229725333, 15.2246809333, "2026"],
[-17.8224034667, 15.22507345, "2020"],
[-17.8227806, 15.2248285833, "2024"],
[-17.8178801, 15.2181871667, "6"],
[-17.81811315, 15.2180543667, "4"],
[-17.8181739833, 15.21851995, "1"],
[-17.81797515, 15.2186312, "3"],
[-17.8181787, 15.2176995, "2A"],
[-17.8183385333, 15.21812895, "2"],
[-17.8293053167, 15.2105357833, "31"],
[-17.8309444333, 15.21208735, "16"],
[-17.8306726667, 15.2115020833, "19"],
[-17.8300903, 15.2120791, "26"],
[-17.8289416167, 15.2111778333, "33"],
[-17.8274969167, 15.2113355167, "53"],
[-17.8199192667, 15.2173622833, "5A"],
[-17.8200392833, 15.2174100167, "3"],
[-17.8196328, 15.2167642, "18"],
[-17.8152585, 15.2155467667, "22C"],
[-17.81766615, 15.2151714167, "22B"],
[-17.8179022667, 15.2151616833, "22A"],
[-17.8191980333, 15.21664245, "20A"],
[-17.81799325, 15.21565925, "20C"],
[-17.8187486333, 15.2165228667, "20B"],
[-17.81964875, 15.2172874167, "7"],
[-17.81925545, 15.2171617, "11"],
[-17.8190491667, 15.2170928333, "13"],
[-17.8194515667, 15.2172147167, "9"],
[-17.81981045, 15.21733245, "5B"],
[-17.81876595, 15.2172445167, "15B"],
[-17.8185999167, 15.2172441, "17A"],
[-17.81816745, 15.21725905, "21B"],
[-17.8182157167, 15.2164626333, "24"],
[-17.8180109667, 15.2173984167, "23A"],
[-17.8179918, 15.217159, "23B"],
[-17.8188473167, 15.2170330333, "15"],
[-17.8186481333, 15.2169800667, "17"],
[-17.8184132, 15.2169327333, "19"],
[-17.8202288333, 15.2174746333, "1"],
[-17.818193, 15.2169955667, "21"],
[-17.8178000833, 15.21733275, "25"],
[-17.8176839, 15.2168488333, "26"],
[-17.8198172, 15.2204960667, "5"],
[-17.819986, 15.22049635, "3"],
[-17.8197666, 15.2200825, "4"],
[-17.8193835833, 15.2191669667, "10"],
[-17.8193426333, 15.2198626667, "11"],
[-17.8192171667, 15.2191711, "12"],
[-17.8192621333, 15.2196364167, "13"],
[-17.8195289667, 15.2193943167, "8"],
[-17.81946, 15.2201499167, "9"],
[-17.8196017833, 15.219674, "6"],
[-17.8194712, 15.2204032, "7A"],
[-17.8196381, 15.2201709333, "7"],
[-17.8200117667, 15.2201364333, "2"],
[-17.8191725167, 15.2191772833, "14"],
[-17.8214417333, 15.2256822167, "4"],
[-17.8210291, 15.2259429667, "8"],
[-17.8212328333, 15.2258132, "6"],
[-17.8216819833, 15.2253209, "3"],
[-17.8334697167, 15.2038651667, "326"],
[-17.8322603667, 15.2028621167, "317"],
[-17.8322013667, 15.2046802667, "1/341"],
[-17.8320576167, 15.2165535833, "435"],
[-17.8319540333, 15.20506915, "2/341"],
[-17.8316975667, 15.2053442333, "3/341"],
[-17.8328229833, 15.2062598, "346"],
[-17.83161565, 15.2074915, "355"],
[-17.83219305, 15.20629425, "347"],
[-17.8328549, 15.2080619667, "362"],
[-17.8321289667, 15.2084019333, "367"],
[-17.8322225167, 15.2120427667, "397"],
[-17.8321649, 15.21119325, "393"],
[-17.8321458833, 15.2131246333, "407"],
[-17.8327043833, 15.21177405, "416"],
[-17.8321267167, 15.2144058167, "417"],
[-17.83212555, 15.2096521333, "173"],
[-17.8331028667, 15.20928495, "366"],
[-17.82866875, 15.22177625, "563"],
[-17.8295602, 15.21924335, "582"],
[-17.8304707833, 15.2182986167, "590"],
[-17.83086, 15.2180687667, "592"],
[-17.8328604833, 15.2172892167, "618"],
[-17.8342575667, 15.2168357833, "638"],
[-17.8239713, 15.2245693667, "504"],
[-17.8365260167, 15.2170911, "673"],
[-17.8233928833, 15.2249669167, "492"],
[-17.8248650167, 15.2246300833, "509"],
[-17.8191798333, 15.2265331667, "435"],
[-17.8143243333, 15.2310940167, "368"],
[-17.81459255, 15.2320046, "363"],
[-17.81127515, 15.2356499167, "311"],
[-17.8126359667, 15.2340855167, "333"],
[-17.8096158333, 15.215218167, "293"],
[-17.8315868667, 15.2177722833, "604"],
[-17.8160177667, 15.2299268333, "391"],
[-17.8204715667, 15.2265481833, "456"],
[-17.8206352, 15.2265670333, "458"],
[-17.8208412667, 15.2265323333, "460"],
[-17.8210184333, 15.22648325, "462"],
[-17.8212643833, 15.2270422167, "465"],
[-17.82119945, 15.2264274333, "464"],
[-17.82136485, 15.2263145667, "466"],
[-17.8215261, 15.22684075, "467"],
[-17.8215301833, 15.2262078, "468"],
[-17.8217701667, 15.2266360167, "1/471"],
[-17.8218176833, 15.22686725, "2/471"],
[-17.8217084667, 15.2260839667, "472"],
[-17.8219782333, 15.2265028333, "475"],
[-17.8218988833, 15.2259723, "476"],
[-17.8223939333, 15.2262447, "479"],
[-17.8223048667, 15.2256582833, "480"],
[-17.8226657, 15.2261230833, "481"],
[-17.8224199, 15.2255487833, "482"],
[-17.8229134167, 15.2259527833, "485"],
[-17.8226917833, 15.2253693167, "486"],
[-17.8231509667, 15.2258170333, "487"],
[-17.82295265, 15.2252571167, "488"],
[-17.8231779, 15.2256743833, "489"],
[-17.8232052667, 15.2251109333, "490"],
[-17.8236200333, 15.22553395, "493"],
[-17.82385775, 15.2253390833, "495"],
[-17.8203220167, 15.22650925, "454"],
[-17.8179795333, 15.2262826, "428"],
[-17.81038215, 15.2365298167, "303"],
[-17.8161746667, 15.2297239833, "393"],
[-17.8083635333, 15.233955, "294"],
[-17.82029495, 15.2214968167, "39"],
[-17.8204754333, 15.2247793333, "12B"],
[-17.8205440833, 15.22344905, "23"],
[-17.8195974333, 15.2254019333, "2"],
[-17.8210801, 15.2217748667, "20A"],
[-17.8209057333, 15.22389775, "18"],
[-17.8208016833, 15.2221582833, "32"],
[-17.8209172667, 15.2236919, "20"],
[-17.8210586833, 15.22351925, "22B"],
[-17.82092905, 15.2234855333, "22"],
[-17.8208587333, 15.2231887667, "24"],
[-17.8210241167, 15.2230882, "24B"],
[-17.8208547833, 15.2229410667, "26"],
[-17.8209917, 15.2228447667, "26B"],
[-17.82097645, 15.2227176167, "28B"],
[-17.8208099167, 15.2226765167, "28"],
[-17.8207666833, 15.2224338833, "30"],
[-17.8209508833, 15.2222094167, "32B"],
[-17.82076515, 15.2219195167, "34A"],
[-17.8207399667, 15.2218131667, "34B"],
[-17.8203075833, 15.2240482833, "19"],
[-17.8205368167, 15.2217746667, "21"],
[-17.8205025833, 15.2231658, "25A"],
[-17.820465, 15.2229733667, "27"],
[-17.82043535, 15.2227387, "29"],
[-17.8204582, 15.2225319667, "31"],
[-17.82024115, 15.2224347833, "31B"],
[-17.8201792333, 15.2222631667, "33"],
[-17.82034095, 15.2219843, "35"],
[-17.8201566167, 15.2219446, "35B"],
[-17.82030575, 15.221594333, "17"],
[-17.8202966833, 15.2233158167, "25"],
[-17.8192714167, 15.2253842667, "1"],
[-17.81969695, 15.22516645, "4"],
[-17.8194904667, 15.22468815, "5"],
[-17.8198524333, 15.2249096667, "6"],
[-17.8200581833, 15.2247122, "8"],
[-17.8193447, 15.2244639667, "5C"],
[-17.8208238, 15.2241340167, "16"],
[-17.8193183667, 15.22515695, "1A"],
[-17.81940575, 15.2249383333, "3"],
[-17.8211855167, 15.2242545333, "18A"],
[-17.8207094833, 15.22430275, "14"],
[-17.82027725, 15.22488135, "10A"],
[-17.8202305833, 15.2245652667, "10"],
[-17.8205049667, 15.2244201333, "12"],
[-17.8196320333, 15.2255586, "22"],
[-17.8209711, 15.2250444667, "8"],
[-17.82120665, 15.2252942833, "5"],
[-17.8210184, 15.2254290333, "7"],
[-17.8213430333, 15.2252086167, "3"],
[-17.8207887833, 15.2251555667, "10"],
[-17.82060805, 15.2257042333, "13"],
[-17.8208330333, 15.22553905, "9"],
[-17.8216988833, 15.2249665667, "1"],
[-17.8215665833, 15.2246573333, "2"],
[-17.8211729, 15.2247789333, "4"],
[-17.8211700667, 15.2249324333, "6"],
[-17.8205967667, 15.2252867, "12"],
[-17.8204008833, 15.2254234667, "14"],
[-17.82043265, 15.22582195, "15"],
[-17.8202017333, 15.2255415833, "16"],
[-17.8200154333, 15.2256547667, "18"],
[-17.8197443167, 15.2256164833, "20"],
[-17.8202814333, 15.22590955, "17"],
[-17.8202967667, 15.21462555, "98"],
[-17.82204485, 15.21819735, "61B"],
[-17.8224241, 15.2179326667, "61C"],
[-17.8215043167, 15.2227943833, "24"],
[-17.8219082, 15.2255408167, "8"],
[-17.8216963, 15.2240856667, "14"],
[-17.8213418333, 15.2188135667, "55"],
[-17.8204966333, 15.2183406333, "54A"],
[-17.8221799833, 15.21122085, "139"],
[-17.8217387, 15.22431625, "12"],
[-17.8218650167, 15.2149734167, "107"],
[-17.8214083333, 15.2220152667, "30"],
[-17.8211738333, 15.2217301, "32"],
[-17.8221598167, 15.2247839333, "9"],
[-17.8216356, 15.2235610667, "18"],
[-17.8212188167, 15.2221387333, "30B"],
[-17.8200466667, 15.2166111, "84A"],
[-17.8216679333, 15.2238393333, "16"],
[-17.8211582833, 15.22031685, "34"],
[-17.8221918667, 15.2250178333, "7"],
[-17.8187410167, 15.2067290167, "170C"],
[-17.8206532, 15.2170745667, "81"],
[-17.8212348667, 15.2181024167, "67"],
[-17.8213057667, 15.2185351167, "57"],
[-17.8214571, 15.2145877333, "110"],
[-17.82207085, 15.2136727167, "121"],
[-17.82190125, 15.2123493, "130"],
[-17.8207519667, 15.2102467333, "150"],
[-17.8212159, 15.2096407, "159"],
[-17.8208313833, 15.2067756, "172"],
[-17.8214413333, 15.2222779833, "28"],
[-17.8206921333, 15.2182549, "54"],
[-17.82043975, 15.2181215, "56"],
[-17.8218791, 15.2252452167, "10"],
[-17.82029435, 15.2169818, "84"],
[-17.8215885167, 15.22308725, "22"],
[-17.8215897333, 15.2233113167, "20"],
[-17.82167455, 15.2183345, "61A"],
[-17.8217164667, 15.2179857333, "63"],
[-17.82147385, 15.22253565, "26"],
[-17.8206765333, 15.2160304333, "86"],
[-17.8188941, 15.2069417, "170A"],
[-17.8188068333, 15.2068104833, "170B"],
[-17.8191742667, 15.2085580333, "170"],
[-17.8214388167, 15.2200072, "45"],
[-17.8209547167, 15.2157149167, "92"],
[-17.82088565, 15.2164849333, "85"],
[-17.82136235, 15.2159546667, "97"],
[-17.8219607333, 15.2232987, "19"],
[-17.8210501, 15.2179753833, "69"],
[-17.8212466667, 15.222215833, "28A"],
[-17.8213836167, 15.22300555, "22A"],
[-17.821339, 15.2227439167, "24A"],
[-17.8208144333, 15.2173117167, "77"],
[-17.8189363667, 15.2211582333, "25"],
[-17.8196676167, 15.2209947333, "26B"],
[-17.8194113, 15.2211991, "26"],
[-17.81883205, 15.2209747, "27"],
[-17.8186925833, 15.2207728833, "29"],
[-17.8199931833, 15.2240802167, "2"],
[-17.819159333, 15.2208279333, "30"],
[-17.81835395, 15.2196571667, "39"],
[-17.8198807333, 15.2235938167, "6"],
[-17.8194567833, 15.22349015, "7"],
[-17.8200507833, 15.21933875, "58"],
[-17.8197902167, 15.2182408, "59A"],
[-17.81991635, 15.21797195, "59B"],
[-17.8198223833, 15.2179361833, "59C"],
[-17.8201049333, 15.2197347167, "60"],
[-17.8199380333, 15.21836645, "61A"],
[-17.82001775, 15.2182443833, "61B"],
[-17.8200944167, 15.21803015, "61C"],
[-17.8201259667, 15.2185610667, "63"],
[-17.82026275, 15.2188001167, "65"],
[-17.8188917833, 15.2201729333, "34"],
[-17.8184921333, 15.2203832, "33"],
[-17.8190387167, 15.2206181333, "32"],
[-17.81968705, 15.2224253667, "16"],
[-17.81981205, 15.223119, "10"],
[-17.8193882833, 15.2229798333, "11"],
[-17.8190901167, 15.2227829833, "13B"],
[-17.8193593, 15.2227247833, "13"],
[-17.81993935, 15.2226893333, "14B"],
[-17.81842725, 15.2201474167, "35"],
[-17.8187965833, 15.2200475333, "36"],
[-17.8183878167, 15.2198735667, "17"],
[-17.8188702167, 15.2196982333, "38B"],
[-17.82027885, 15.2209890667, "82"],
[-17.8199839667, 15.2190668, "56"],
[-17.8187008333, 15.21971745, "38A"],
[-17.8196820167, 15.22262455, "14"],
[-17.8186528333, 15.2191018, "42"],
[-17.8182912167, 15.21915535, "43"],
[-17.81870525, 15.21945675, "40"],
[-17.8195044333, 15.2214081833, "24"],
[-17.81857075, 15.2205925167, "31"],
[-17.8195656167, 15.2181396, "57"],
[-17.8198411667, 15.2213911167, "24A"],
[-17.8195851667, 15.2240869667, "3"],
[-17.8192829167, 15.2239720167, "3A"],
[-17.8193257, 15.2224725667, "15"],
[-17.8197290167, 15.2224129833, "16A"],
[-17.8196499333, 15.2221262667, "18"],
[-17.8196755333, 15.2243193333, "1"],
[-17.8192091667, 15.22166805, "21"],
[-17.81957585, 15.22166585, "22"],
[-17.8199106833, 15.2238436, "4"],
[-17.81951715, 15.22172785, "5A"],
[-17.8193177833, 15.22178105, "5"],
[-17.8189702833, 15.2184597333, "46"],
[-17.8185876167, 15.21821495, "47A"],
[-17.8185706333, 15.2178869167, "47B"],
[-17.8191945667, 15.21845965, "48"],
[-17.8188482167, 15.2176680833, "49"],
[-17.8194043667, 15.21852395, "50"],
[-17.8196233333, 15.2186248333, "52"],
[-17.81920055, 15.2179787167, "53"],
[-17.8198255, 15.2188011167, "54"],
[-17.8205994333, 15.2207248667, "81"],
[-17.8193045333, 15.2222075667, "17"],
[-17.8205621167, 15.2204520167, "79"],
[-17.8180799333, 15.2194407, "41A"],
[-17.8208301833, 15.2206735833, "81A"],
[-17.8202558, 15.2206809333, "80"],
[-17.81941275, 15.21804965, "55"],
[-17.8190239, 15.2179808833, "51"],
[-17.8187854, 15.2180712167, "47"],
[-17.8187476667, 15.2186516333, "44"],
[-17.8182977, 15.21889655, "45"],
[-17.81831675, 15.2194069833, "41"],
[-17.8192735167, 15.2219502167, "19"],
[-17.8196219167, 15.22189825, "20"],
[-17.81962665, 15.2216432667, "22A"],
[-17.8192782833, 15.2209942, "28"],
[-17.8208129833, 15.2209176833, "83A"],
[-17.8206351167, 15.2209705667, "83"],
[-17.8203109333, 15.2212402667, "84"],
[-17.81909575, 15.22139795, "23"],
[-17.8197787167, 15.2228814, "12"],
[-17.8195628333, 15.21791605, "57A"],
[-17.8198173833, 15.2233606833, "8"],
[-17.8194342167, 15.22322975, "9"]
];