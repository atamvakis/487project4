//Array of Markers
var markers = [
  {
    idTitle: 'duke',
    coords:{ lat: 36.035833, lng: -78.921183 },
    title: 'Duke Homestead',
    description:"See the early home, factories, and farm where Washington Duke first grew and processed tobacco. His sons later founded The American Tobacco Company, the world's largest tobacco company. Admission is free, but donations are welcome.",
    img: 'img/pics/dukehomestea.jpg'
  },
  {
    idTitle: 'bennett',
    coords:{ lat: 36.029213, lng: -78.975073 },
    title: 'Bennett Place',
    description:"In April 1865, Confederate Gen. Joseph E. Johnston and Union Gen. William T. Sherman met at Bennett Place, where they signed surrender papers for Southern armies in the Carolinas, Georgia, and Florida. Admission is free, but donations are welcome.",
    img: 'img/pics/bennett.jpg'
  },
  {
    idTitle: 'dobbs',
    coords:{ lat: 35.821592, lng: -80.897344 },
    title: 'Fort Dobbs',
    description:"Ft. Dobbs provides a window into the tumultuous period of history known as the French and Indian War (1754-1763) or Seven Years War. As the only state historic site associated with the period, it represents North Carolina's link with a global war for empire that crossed five continents, lasted nearly a decade and sowed the seeds for independence. Free.",
    img: 'img/pics/dobbs.jpg'
  },
  {
    idTitle: 'alamance',
    coords:{ lat: 36.009738, lng: -79.520861 },
    title: 'Alamance Battleground',
    description:"In 1771, an armed rebellion of backcountry farmers called Regulators battled with royal governor William Tryon's militia on land now preserved at Alamance Battleground State Historic Sites. Admission is free, but donations are welcome.",
    img: 'img/pics/alamance.jpg'
  },
  {
    idTitle: 'battleship',
    coords:{ lat: 34.236508, lng: -77.954311 },
    title: 'Battleship North Carolina',
    description:"One of the most decorated battleships of World War II that now serves as a memorial to all North Carolina veterans.",
    img: 'img/pics/battleship.jpg'
  },
  {
    idTitle: 'bentonville',
    coords:{ lat: 35.302176, lng: -78.322470 },
    title: 'Bentonville Battlefield',
    description:"The Battle of Bentonville, fought March 19-21, 1865, was the last full-scale action of the Civil War in which a Confederate army was able to mount a tactical offensive. This was the largest ever battle fought in North Carolina. Admission is free, but donations are welcome.",
    img: 'img/pics/bentonville.jfif'
  },
  {
    idTitle: 'fisher',
    coords:{ lat: 33.971752, lng: -77.917666 },
    title: 'Fort Fisher',
    description:"Until the last few months of the Civil War, Fort Fisher kept North Carolina's port of Wilmington open to blockade-runners supplying necessary goods to Confederate armies inland. When Ft. Fisher fell after a massive Federal amphibious assault on January 15, 1865, its defeat helped seal the fate of the Confederacy. Free Admission.",
    img: 'img/pics/fisher.jpg'
  },
  {
    idTitle: 'stagville',
    coords:{ lat: 36.119901, lng: -78.836680 },
    title: 'Historic Stagville',
    description:"Comprises the remains of North Carolina's largest pre-Civil War plantation and one of the South's largest. It once belonged to the Bennehan-Cameron family, whose combined holdings totaled approximately 900 slaves and almost 30,000 acres by 1860.",
    img: 'img/pics/stagville.jpg'
  },
  {
    idTitle: 'reed',
    coords:{ lat: 35.285486, lng: -80.466463 },
    title: 'Reed Gold Mine',
    description:"Reed Gold Mine is the site of the first documented gold find in the United States. From this discovery, gold mining spread gradually to nearby counties and eventually into other southern states. Free admission, donations are accepted and appreciated.",
    img: 'img/pics/reed.jpg'
  },
  {
    idTitle: 'somerset',
    coords:{ lat: 35.789385, lng: -76.403968 },
    title: 'Somerset Place',
    description:"Somerset Place is a representative state historic site offering a comprehensive and realistic view of 19th-century life on a large North Carolina plantation. Free admission, donations are accepted and appreciated.",
    img: 'img/pics/somerset.jfif'
  },
  {
    idTitle: 'tryon',
    coords:{ lat: 35.105765, lng: -77.044371 },
    title: 'Tryon Palace',
    description:"Historic homes and gardens crowned by a grand palace, all at North Carolina’s first state capitol.",
    img: 'img/pics/tryon.jpg'
  },
  {
    idTitle: 'towncreek',
    coords:{ lat: 35.182620, lng: -79.929204 },
    title: 'Town Creek Indian Mound',
    description:"Town Creek Indian Mound is an unusual phenomenon in the history of North American archaeology. Situated on Little River (a tributary of the Great Pee Dee in central North Carolina), it has been the focus of a consistent program of archaeological research under one director for more than half a century. Free admission, donations are accepted and appreciated.",
    img: 'img/pics/towncreek.jpg'
  },
  {
    idTitle: 'brunswick',
    coords:{ lat: 34.040498, lng: -77.945959 },
    title: 'Brunswick Town / Fort Anderson',
    description:"A major pre-Revolutionary port on North Carolina's Cape Fear River, Brunswick was razed by British troops in 1776 and never rebuilt. During the Civil War, Fort Anderson was constructed atop the old village site. Admission free, but donations welcome.",
    img: 'img/pics/brunswick.jpg'
  },
  {
    idTitle: 'charlottehawkins',
    coords:{ lat: 36.067864, lng: -79.624333 },
    title: 'Charlotte Hawkins Brown Museum',
    description:"Founded in 1902 by Dr. Charlotte Hawkins Brown, Palmer Memorial Institute transformed the lives of more than 2,000 African American students. Today visitors can explore this unique environment where boys and girls lived and learned during the greater part of the 20th century. Free.",
    img: 'img/pics/charlottehawkins.jfif'
  },
  {
    idTitle: 'cssneuse',
    coords:{ lat: 35.261306, lng: -77.583213 },
    title: 'CSS Neuse & Gov. Caswell Memorial',
    description:"Glimpses into two of our nation's most pivotal wars can be found in one historic site within the city of Kinston. Here you will explore the celebrated life of Richard Caswell, the first governor of the independent state of North Carolina.",
    img: 'img/pics/cssneuse.jpg'
  },
  {
    idTitle: 'aycock',
    coords:{ lat: 35.520168, lng: -77.976017 },
    title: 'Governor Charles B. Aycock Birthplace',
    description:"In 1900 he was elected governor and dedicated himself to improving public education in North Carolina. By the time he left office four years later, one school had been built for each day the governor was in office. Free Admission.",
    img: 'img/pics/aycock.jpg'
  },
  {
    idTitle: 'horseshoe',
    coords:{ lat: 35.466782, lng: -79.383874 },
    title: 'House in the Horseshoe',
    description:"In spring and summer, bright flowers surround this plantation house named for its location on a horseshoe bend in the Deep River. The house (ca. 1770) was owned by Philip Alston, whose band of colonists seeking independence from Britain was attacked here in 1781. Free, donations are accepted and appreciated.",
    img: 'img/pics/horseshoe.jpg'
  },
  {
    idTitle: 'hornecreek',
    coords:{ lat: 36.268108, lng: -80.484680 },
    title: 'Horne Creek Farm',
    description:"Once the Hauser family farm, Horne Creek enables visitors to experience farm life in North Carolina's northwestern Piedmont circa 1900. The site features the family's original farm house, a tobacco curing barn, a corn crib, adjacent fields under cultivation, and even a heritage apple orchard. Free, donations are accepted and appreciated.",
    img: 'img/pics/hornecreek.jpg'
  },
  {
    idTitle: 'halifax',
    coords:{ lat: 36.329965, lng: -77.589457 },
    title: 'Historic Halifax',
    description:"Located on the Roanoke River, the town of Halifax developed into a commercial and political center at the time of the American Revolution. A self-guided walking tour of the site includes several authentically restored and furnished buildings including the 1838 Jail, the 1790 Eagle Tavern and the Underground Railroad Trail.",
    img: 'img/pics/halifax.jpg'
  },
  {
    idTitle: 'edenton',
    coords:{ lat: 36.061395, lng: -76.607885 },
    title: 'Historic Edenton',
    description:"Featuring 18th and 19th century history, North Carolina's second oldest town Edenton was one of the fledgling nation's chief political, cultural, and commercial centers. The state's first colonial capital, it was established in the late 17th century and incorporated in 1722.",
    img: 'img/pics/edenton.jpg'
  },
  {
    idTitle: 'bath',
    coords:{ lat: 35.476909, lng: -76.811692 },
    title: 'Historic Bath',
    description:"European settlement near the Pamlico River in the 1690s led to the founding of Bath, North Carolina's first town, in 1705. By 1708, Bath had 50 people and 12 houses. Political rivalries, Indian wars, and piracy marked its early years but in 1746 Bath was considered for the colony's capital.",
    img: 'img/pics/bath.jpg'
  },
  {
    idTitle: 'capitol',
    coords:{ lat: 35.780306, lng: -78.639102 },
    title: 'N.C. State Capitol',
    description:"The North Carolina State Capitol, completed in 1840, is one of the finest and best-preserved examples of a major civic building in the Greek Revival style of architecture. It is a National Historic Landmark. Free admission, donations are accepted and appreciated.",
    img: 'img/pics/capitol.jpg'
  },
  {
    idTitle: 'transportation',
    coords:{ lat: 35.688025, lng: -80.431023 },
    title: 'North Carolina Transportation Museum',
    description:"Discover the people and machines that have moved North Carolina, this is where locomotives that hauled Southern's passenger trains and freight trains filled with North Carolina furniture, textiles, tobacco, and produce were serviced from 1896 to the late 1970's.",
    img: 'img/pics/transportation.jpg'
  },
  {
    idTitle: 'polk',
    coords:{ lat: 35.077812, lng: -80.881794 },
    title: 'President James K. Polk',
    description:"This site is located on land once owned by the parents of James K. Polk, the 11th U.S. president. The state historic site commemorates significant events in the Polk administration: the Mexican-American War, settlement of the Oregon boundary dispute, and the annexation of California. Free, donations are accepted and appreciated.",
    img: 'img/pics/polk.gif'
  },
  {
    idTitle: 'wolfe',
    coords:{ lat: 35.597442, lng: -82.551315 },
    title: 'Thomas Wolfe Memorial',
    description:"Thomas Wolfe left an indelible mark on American letters. And his mother's boardinghouse in Asheville, North Carolina, now the Thomas Wolfe Memorial, has become one of literature's most famous landmarks.",
    img: 'img/pics/wolfe.jpg'
  },
  {
    idTitle: 'roanoke',
    coords:{ lat: 35.910872, lng: -75.665750 },
    title: 'Roanoke Island Festival Park',
    description:"Roanoke Island Festival Park is an interactive family attraction that celebrates the first English settlement in America. Visitors board and explore the park's centerpiece, a representational ship, Elizabeth II.",
    img: 'img/pics/roanoake.png'
  },
  {
    idTitle: 'zebulon',
    coords:{ lat: 35.700903, lng: -82.496284 },
    title: 'Zebulon B. Vance Birthplace',
    description:'This pioneer farmstead, tucked in the beautiful Reems Creek Valley, features a two-story log cabin "mansion," an original 1790s slave cabin, and five outbuildings. Furnished as it would have been in the 1830s, the site explores life in early Buncombe County as seen through the lives of the Vance family and enslaved people. Free admission, donations are accepted and appreciated.',
    img: 'img/pics/zebulon.jpg'
  }
];
var dialogBuilder = "";
var listBuilder = "";

/* $(document).ready( function () {
    console.log("jQuery Loaded");
    addModal();
    buildList();
}); */
function kickoff(){
  addModal();
  buildList();

}
var x = "";

function testing(x){
  console.log(x);
  $("#dialog" + x).dialog("open");
}


function initMap() {
  //Map Options, Map centered on NC
  var options = {
    zoom: 7,
    center: { lat: 34.943999, lng: -79.242320}
  }

  //Create Map
  var map = new google.maps.Map(document.getElementById("map"), options);

  //Loop Through markers
  for(var i = 0; i < markers.length; i++){
    addMarker(markers[i]);
    //addModal(markers[i]);
  }

  //Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      icon:'img/marker-bold1.png',
    });

    //Add the info windows and event listeners
    var infoWindow = new google.maps.InfoWindow({
      content: '<h4>'+props.title+'</h4><br><img class="windowImg" src='+props.img+'><br><a href="#" class="dialogLink" onclick="testing(\'polk\')" >Learn More</a>'
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });

  }


}


function addModal(){

  console.log(markers.length);

  for(var i = 0; i < markers.length; i++){
    var dialogHTML = document.getElementById('dialogBuilder');

    dialogBuilder += '<div id="dialog' + markers[i].idTitle + '" title="' + markers[i].title + '"><p>' + markers[i].description + '</p></div>'

    dialogHTML.innerHTML = dialogBuilder;

  }
/*
    $( "#dialog" + markers[i].idTitle ).dialog({
      modal: true,
      autoOpen: false
    });
  }
  */


}

setTimeout(function () {
  for(var i = 0; i < markers.length; i++){
      $( "#dialog" + markers[i].idTitle ).dialog({
      modal: true,
      autoOpen: false
    });
  }
}, 1000);

//Create the List
function buildList(){
  var list = document.getElementById("list")

  listBuilder += "<ul>";

  for(var i = 0; i < markers.length; i++){
    listBuilder += "<li class='listItem'><h4>"+markers[i].title+"</h4>"
      listBuilder += "<div class='row'>"
        listBuilder += "<div class='col-md-4'>"
          listBuilder+= "<img class='listImg' src="+markers[i].img+">"
        listBuilder += "</div>"
        listBuilder += "<div class='col-md-7'>"
                listBuilder += "<p>"+markers[i].description+"</p>"
        listBuilder += "</div>"
      listBuilder += "</div>"
    listBuilder += "</li>"
    listBuilder += "<hr>"
  }

  listBuilder += "</ul>";

  list.innerHTML = listBuilder;

  initMap();
}


//Dialog Box
$( function() {
   $( "#dialog" ).dialog({
     modal: true,
     autoOpen: false
   });

   $( "#opener" ).on( "click", function() {
     $( "#dialog" ).dialog( "open" );
   });
 } );
