var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg" , "https://thumbs.dreamstime.com/b/grandmother-waving-hand-cute-cartoon-character-happy-grandparent-s-day-grandmother-waving-hand-cute-cartoon-character-happy-151479821.jpg" , "https://media.istockphoto.com/vectors/happy-man-points-to-something-character-for-advertisement-guy-shows-a-vector-id1183732867?b=1&k=20&m=1183732867&s=170667a&w=0&h=Jl83iMAHr568MULHzlP3d04bm-c_u-lyLmbMMOCdVIE=" ];
var names = ["Fmaily Book","KT Lanjewar", "Nityaprakash Lanjewar", "Jeet Lanjewar", "Mahi Lanjewar", "Vaishali Lanjewar" , "Tarabai Lanjewar" , "Sonu manapura"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
