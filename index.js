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
 {name:"Club Paris",lat:61.21785,lon:-149.89021},
{name:"George's Steak Pit",lat:34.747639,lon:-87.70131},
{name:"Durant's",lat:33.477198,lon:-112.073547},
{name:"Nick & Stef's Steakhouse",lat:34.052705,lon:-118.252826},
{name:"Steakhouse No. 316",lat:40.0175937,lon:-105.2782093},
{name:"Steakhouse No. 316",lat:39.190159,lon:-106.820039},
{name:"Washington Prime",lat:41.09906,lon:-73.416344},
{name:"Walter's Steakhouse",lat:39.752272,lon:-75.570621},
{name:"Prime 112",lat:25.76991,lon:-80.13324},
{name:"Hal's The Steakhouse",lat:33.854663,lon:-84.381687},
{name:"Buzz's Original Steakhouse",lat:21.39597,lon:-157.7265},
{name:"The Iowa Chop House",lat:41.659766,lon:-91.532085},
{name:"Chandlers",lat:43.615486,lon:-116.206449},
{name:"Lawry's The Prime Rib",lat:41.893526,lon:-87.625069},
{name:"St. Elmo Steak House",lat:39.764806,lon:-86.159827},
{name:"Scotch & Sirloin",lat:37.678294,lon:-97.274445},
{name:"Jeff Ruby's Steakhouse",lat:38.04632,lon:-84.49879},
{name:"Jeff Ruby's Steakhouse",lat:38.256928,lon:-85.75558},
{name:"Le Moo",lat:38.245175,lon:-85.703326},
{name:"Dickie Brennan's Steakhouse",lat:29.95418,lon:-90.068775},
{name:"Smith & Wollensky",lat:42.352962,lon:-71.052512},
{name:"Voltaggio Brothers Steak House",lat:38.7936186,lon:-77.0118173},
{name:"Bullwinkle's",lat:44.108159,lon:-69.330977},
{name:"Prime and Proper",lat:42.332291,lon:-83.049301},
{name:"Lindey's Prime Steak House",lat:45.050549,lon:-93.163114},
{name:"Jess & Jim's Steakhouse",lat:38.882289,lon:-94.589188},
{name:"Doe's Eat Place",lat:33.415616,lon:-91.056208},
{name:"Marshall Steakhouse",lat:34.8083578,lon:-89.5107334},
{name:"Lolo Creek Steakhouse",lat:46.757269,lon:-114.08806},
{name:"Angus Barn Restaurant",lat:35.899163,lon:-78.763523},
{name:"Cork' N Cleaver",lat:46.830569,lon:-96.801086},
{name:"Oles's Big Game Steakhouse & Lounge",lat:41.123435,lon:-101.355919},
{name:"The Library Restaurant",lat:43.075275,lon:-70.759677},
{name:"The River Palm Terrace",lat:40.842701,lon:-73.968687},
{name:"The River Palm Terrace",lat:40.92671,lon:-74.09179},
{name:"Rio Chama",lat:35.683196,lon:-105.938473},
{name:"SW Steakhouse",lat:36.126287,lon:-115.166495},
{name:"Keens Steakhouse",lat:40.750777,lon:-73.986438},
{name:"Jeff Ruby's Steakhouse",lat:39.104076,lon:-84.511915},
{name:"Cattlemen's Steakhouse",lat:35.452382,lon:-97.554898},
{name:"Urban Farmer",lat:45.519032,lon:-122.677813},
{name:"Butcher and Singer",lat:39.948961,lon:-75.166441},
{name:"22 Bowen's Wine Bar & Grille",lat:41.48673,lon:-71.316546},
{name:"Oak Steakhouse",lat:32.776621,lon:-79.927792},
{name:"Dakotah Steakhouse",lat:44.097663,lon:-103.15198},
{name:"Jeff Ruby's Steakhouse",lat:36.1648766,lon:-86.7796673},
{name:"Killen's Steakhouse",lat:29.557436,lon:-95.284649},
{name:"Lonesome Dove Western Bistro",lat:32.788165,lon:-97.348998},
{name:"Grub Steak",lat:40.663816,lon:-111.494625},
{name:"Hondos",lat:37.649317,lon:-77.582716},
{name:"Fire & Ice",lat:44.017263,lon:-73.169047},
{name:"The Butcher's Table",lat:47.617535,lon:-122.338572},
{name:"Five O'Clock Steakhouse",lat:43.043392,lon:-87.943388},
{name:"The Wonder Bar Steakhouse",lat:39.27974,lon:-80.295029},
{name:"Million Dollar Cowboy Steakhouse",lat:43.479863,lon:-110.762718},
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
  title: "Best Steak House" + "<br>" + "Location:" + 
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
