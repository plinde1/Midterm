let map, objMarkers = [], whMarkers = [];

var objs = [  
  
  {name: "AK B&B Bar", lat:57.78782845, lon:-152.4132228},
  {name: "AL Peerless Saloon", lat:33.65734577, lon:-85.8304739},
  {name: "AR Ohio Club", lat:34.51481581, lon:-93.05411339},
  {name: "AZ Palace", lat:34.54138041, lon:-112.4704957},
  {name: "CA Iron Door Saloon", lat:37.83916712, lon:-120.2296329},
  {name: "CO Buffalo Rose", lat:39.75568056, lon:-105.2213216},
  {name: "CT Griswold Inn", lat:41.35118723, lon:-72.38698483},
  {name: "DE Kelly's Logan House", lat:39.75834131, lon:-75.56229115},
  {name: "FL Palace Saloon", lat:30.67159653, lon:-81.46400928},
  {name: "GA Pirates' House", lat:32.0780611, lon:-81.08390808},
  {name: "HI Smith's Union Bar", lat:21.31132912, lon:-157.8622041},
  {name: "IA Breitbach's Country Dining", lat:42.63916254, lon:-90.86933613},
  {name: "ID White Horse Saloon", lat:47.96491385, lon:-116.8708205},
  {name: "IL Village Tavern", lat:42.17838049, lon:-87.99932957},
  {name: "IN Knickerbocker Saloon", lat:40.41861534, lon:-86.89168453},
  {name: "KS Hays House", lat:38.66155386, lon:-96.48940086},
  {name: "KY Talbott Tavern", lat:37.80899763, lon:-85.46751738},
  {name: "LA Lafitte's Blacksmith Shop", lat:29.96102571, lon:-90.06366491},
  {name: "MA Warren Tavern", lat:42.37422466, lon:-71.06311083},
  {name: "MD Middleton Tavern", lat:38.97824764, lon:-76.48688078},
  {name: "ME Jameson Tavern Restaurant", lat:43.85828018, lon:-70.1027298},
  {name: "MI Old Tavern Inn", lat:41.91161871, lon:-86.20817184},
  {name: "MN Neumanns Bar", lat:45.01208067, lon:-92.99306631},
  {name: "MO O'Malley's Pub", lat:39.41102743, lon:-94.89960194},
  {name: "MS King's Tavern (CLOSED)", lat:31.56054497, lon:-91.39978261},
  {name: "MS Under the Hill Saloon (not but close)", lat:31.55859232, lon:-91.41230106},
  {name: "MT Bale of Hay Saloon", lat:45.29298306, lon:-111.947422},
  {name: "NC Bistro Roca Antlers Bar", lat:36.13147974, lon:-81.66051865},
  {name: "ND Peacock Alley", lat:46.80572748, lon:-100.7850122},
  {name: "NE Glur's Tavern", lat:41.42695427, lon:-97.3560977},
  {name: "NH Hancock Inn", lat:42.97366619, lon:-71.98285103},
  {name: "NJ Barnsboro Inn", lat:39.76213932, lon:-75.15976667},
  {name: "NM El Farol", lat:35.68018198, lon:-105.9247041},
  {name: "NV Genoa Bar", lat:39.00322437, lon:-119.8462701},
  {name: "NY Old '76 House", lat:41.02168322, lon:-73.94830942},
  {name: "OH Ye Olde Trail Tavern", lat:39.80593443, lon:-83.88896227},
  {name: "OK Eischen's Bar", lat:35.72545767, lon:-97.97543049},
  {name: "OR Huber's Cafe", lat:45.52011679, lon:-122.6745816},
  {name: "PA King George II Inn", lat:40.09460449, lon:-74.85601187},
  {name: "RI & USA White Horse Tavern", lat:41.49134874, lon:-71.31373644},
  {name: "SC The Tavern at Rainbow Row", lat:32.77652979, lon:-79.9269104},
  {name: "SD Buffalo Bodega", lat:44.37731981, lon:-103.7301636},
  {name: "TN Springwater Supper Club", lat:36.14598513, lon:-86.81211948},
  {name: "TX Scholz Garten", lat:30.27776241, lon:-97.73628473},
  {name: "UT Shooting Star Saloon", lat:41.26078606, lon:-111.7712975},
  {name: "VA The Tavern", lat:36.71244621, lon:-81.96892977},
  {name: "VT Ye Olde Tavern", lat:43.17832947, lon:-73.05124998},
  {name: "WA Bluebird Inn", lat:45.99808216, lon:-120.3023529},
  {name: "WI Uptowner", lat:43.06754351, lon:-87.89826393},
  {name: "WV North End Tavern", lat:39.28743124, lon:-81.53301716},
  {name: "WY Miners & Stockmen's Steakhouse &amp; Spirits", lat:42.32847691, lon:-104.72588933},
];
var wh = [
  {name: "St. Petersburg, FL", lat:27.820306,lon:-82.638745},
  {name: "Tampa, FL", lat:28.063873,lon:-82.504375},
  {name: "Coconut Creek, FL", lat:26.283344,lon:-80.187127},
  {name: "Orlando, FL", lat:28.451657,lon:-81.489415},
  {name: "Lake Mary FL", lat:28.786967,lon:-81.356266},
  {name: "Sarasota FL", lat:27.389964,lon:-82.456982},
  {name: "South Tampa FL", lat:27.940975,lon:-82.482907},
  {name: "Tampa, FL", lat:28.118035,lon:-82.381683},
  {name: "UCF Orlando, FL ", lat:28.597718,lon:-81.220349},
  {name: "Melbourne, FL", lat:28.242999,lon:-80.727062},
  {name: "Tampa, FL", lat:28.042989,lon:-82.592598},
  {name: "West Palm Beach, FL", lat:26.713809,lon:-80.050311},
  {name: "Raleigh, NC", lat:35.837508,lon:-78.640352},
  {name: "Arlington TX", lat:32.664364,lon:-97.133263},
  {name: "Ft..Myers FL", lat:26.54834,lon:-81.869366},
  {name: "Brewery District (Columbus, OH)", lat:39.951439,lon:-83.000486},
  {name: "Dadeland", lat:25.68687,lon:-80.31284},
  {name: "Land O' Lakes", lat:28.187487,lon:-82.437952},
  {name: "Port Orange", lat:29.14206,lon:-81.014192},
  {name: "Downtown St. Pete", lat:27.770118,lon:-82.638216},
  {name: "Wellington FL", lat:26.645144,lon:-80.204723},
  {name: "The Vista Columbia, SC", lat:33.999716,lon:-81.038223},
  {name: "Altamonte FL", lat:28.663698,lon:-81.384197},
  {name: "South End Charlotte, NC", lat:35.21627,lon:-80.853721},
  {name: "Naperville IL", lat:41.802191,lon:-88.126788},
  {name: "Savannah, GA", lat:32.079353,lon:-81.093526},
  {name: "Pensacola, FL", lat:30.410296,lon:-87.21447},
  {name: "Tempe AZ", lat:33.424522,lon:-111.940409},
  {name: "Arlington VA", lat:38.881743,lon:-77.115393},
  {name: "Clermont, FL", lat:28.53733,lon:-81.735706},
  {name: "Milwaukee, WI", lat:43.052945,lon:-87.894542},
  {name: "San Antonio", lat:29.653258,lon:-98.447687},
  {name: "Birmingham", lat:33.501809,lon:-86.797101},
  {name: "Easton (Columbus OH)", lat:40.049089,lon:-82.916876},
  {name: "Kendall (Miami FL)", lat:25.688621,lon:-80.386362},
  {name: "SMU (Dallas TX)", lat:32.841772,lon:-96.771299},
  {name: "Evanston", lat:42.047114,lon:-87.68203},
  {name: "Key West FL", lat:24.559551,lon:-81.804873},
  {name: "Midtown (Miami FL)", lat:25.807487,lon:-80.193297},
  {name: "KATY  (Katy TX)", lat:29.737709,lon:-95.777577},
  {name: "Ann Arbor MI", lat:42.274905,lon:-83.733003},
];

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const myLatlng = { lat: 41.3114, lng: -105.5911  };

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatlng,
      mapId: "ded0469314e2c640",
    });
    const infoWindow = new google.maps.InfoWindow();

    const createObjsMarkers = () => {
      objs.forEach(location => {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      title: "Oldest Bars" + "<br>" + "Name:" + 
            location.name + "<br>" + "Lat:" + location.lat + 
            "<br>" + "Long:" + location.lon,
      position: {lat: location.lat, lng: location.lon},
      gmpClickable: true,
    });

    marker.addListener ("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
    objMarkers.push(marker);
  });
};

const createWhMarkers = () => {
  wh.forEach(location => {
const marker = new google.maps.marker.AdvancedMarkerElement({
  map: map,
  title: "World of Beer Store" + "<br>" + "Location:" + 
        location.name + "<br>" + "Lat:" + location.lat + 
        "<br>" + "Long:" + location.lon,
  position: {lat: location.lat, lng: location.lon},
  gmpClickable: true, 
});

marker.addListener ("click", () => {
  infoWindow.close();
  infoWindow.setContent(marker.title);
  infoWindow.open(marker.map, marker);
});
whMarkers.push(marker);
});
};
    createObjsMarkers();
    createWhMarkers();

  document.getElementById("toggle-objects").addEventListener("click", toggleObjsMarkers);
  document.getElementById("toggle-wh").addEventListener("click", toggleWhMarkers);
  
function toggleObjsMarkers() {
  objMarkers.forEach(marker => {
    marker.map = marker.map ? null : map;
});
}

function toggleWhMarkers() {
  whMarkers.forEach(marker => {
    marker.map = marker.map ? null : map;
});
}
}
