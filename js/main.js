///// unasisted /////

//prototype

Array.prototype.filterObjects = function(key, value) {
    return this.filter(function(x) { return x[key] === value; })
}

// FUNCTION

function fortune (){
  
  //variables set
  var name = document.getElementById("name").value;
  var select = document.getElementById("select").selectedIndex;
  var birthday = document.getElementById("select").options[select].value; 
  var gender
  var genderMale = document.getElementById("genderM").checked;
  var genderFemale = document.getElementById("genderF").checked;
  //var genderOther = document.getElementById("genderO").checked;
  
  if(genderMale){
    gender = "male";
  } else if(genderFemale){
    gender = "female";
  } 

  // Fortunes set specific 
  
  allFortunes = [
    //    {gender: 'male', birthday: '', fortune: 'Your home will be filled with peace and harmony.'},
    //    {gender: 'female', birthday: '', fortune: 'Everything will work out for the best.'},
    {gender: 'male', birthday: 'january', fortune: 'YOUR FORTUNE = Stop procrastinating. Make a decision already.', stone: "BIRTHSTONE = Garnet"},
    {gender: 'female', birthday: 'january', fortune: 'YOUR FORTUNE = Tomorrow is another day.', stone:"BIRTHSTONE = Garnet"},
    {gender: 'male', birthday: 'february', fortune: "YOUR FORTUNE = Your smile lights up someone else's day.", stone: "BIRTHSTONE = Amethyst"},
    {gender: 'female', birthday: 'february', fortune: "YOUR FORTUNE = Your smile lights up someone else's day.", stone: "BIRTHSTONE = Amethyst"},
    {gender: 'male', birthday: 'march', fortune: 'YOUR FORTUNE = You excel at pleasing others.', stone:"BIRTHSTONE = Aquamarine"},
    {gender: 'female', birthday: 'march', fortune: 'YOUR FORTUNE = You excel at pleasing others.', stone:"BIRTHSTONE = Aquamarine"},
    {gender: 'male', birthday: 'april', fortune: 'YOUR FORTUNE = Respect your elders. You could inherit a large sum of money.', stone: "BIRTHSTONE = Diamond"},
    {gender: 'female', birthday: 'april', fortune: 'YOUR FORTUNE = Respect your elders. You could inherit a large sum of money.', stone: "BIRTHSTONE = Diamond"},
    {gender: 'male', birthday: 'may', fortune: 'YOUR FORTUNE = Your home will be filled with peace and harmony.', stone: "BIRTHSTONE = Emerald"},
    {gender: 'female', birthday: 'may', fortune: 'YOUR FORTUNE = Your home will be filled with peace and harmony.', stone: "BIRTHSTONE = Emerald"},
    {gender: 'male', birthday: 'june', fortune: 'YOUR FORTUNE = Your home will be filled with peace and harmony.', stone: "BIRTHSTONE = Pearl"},
    {gender: 'female', birthday: 'june', fortune: 'YOUR FORTUNE = Your home will be filled with peace and harmony.', stone: "BIRTHSTONE = Pearl"},
    {gender: 'male', birthday: 'july', fortune: 'YOUR FORTUNE = Stop procrastinating. Make a decision already.', stone: "BIRTHSTONE = Ruby"},
     {gender: 'female', birthday: 'july', fortune: 'YOUR FORTUNE = Stop procrastinating. Make a decision already.', stone: "BIRTHSTONE = Ruby"},
    {gender: 'male', birthday: 'august', fortune: 'YOUR FORTUNE = Respect your elders. You could inherit a large sum of money.', stone: "BIRTHSTONE = Peridot"},
    {gender: 'female', birthday: 'august', fortune: 'YOUR FORTUNE = Respect your elders. You could inherit a large sum of money.', stone: "BIRTHSTONE = Peridot"},
    {gender: 'male', birthday: 'september', fortune: "YOUR FORTUNE = Your smile lights up someone else's day.", stone: "BIRTHSTONE = Sapphire"},
    {gender: 'female', birthday: 'september', fortune: "YOUR FORTUNE = Your smile lights up someone else's day.", stone: "BIRTHSTONE = Sapphire"},
    {gender: 'male', birthday: 'october', fortune: "YOUR FORTUNE = Work with what you have.", stone: "BIRTHSTONE = Opal"},
    {gender: 'female', birthday: 'october', fortune: "YOUR FORTUNE = Work with what you have.", stone: "BIRTHSTONE = Opal"},
    {gender: 'male', birthday: 'november', fortune: 'YOUR FORTUNE = Your home will be filled with peace and harmony.', stone: "BIRTHSTONE = Topaz"},
    {gender: 'female', birthday: 'november', fortune: 'YOUR FORTUNE = Your home will be filled with peace and harmony.', stone: "BIRTHSTONE = Topaz"},
    {gender: 'male', birthday: 'december', fortune: 'YOUR FORTUNE = You excel at pleasing others.', stone: "BIRTHSTONE = Tanzanite"},
    {gender: 'female', birthday: 'december', fortune: 'YOUR FORTUNE = You excel at pleasing others.', stone: "BIRTHSTONE = Tanzanite"},
  ]

  //  console.log(allFortunes)
  theseFor = allFortunes.filterObjects('gender', gender);
  // console.log(theseFor);
  theseFor = theseFor.filterObjects('birthday', birthday);
  //  console.log(theseFor);
  
  // Random Fortune Returns
  
  var randomNumber = Math.floor(Math.random()*theseFor.length);
  var randomFortune = theseFor[randomNumber];
  // console.log(randomFortune); FOR DEBUG
  
  // Fortune will appear if set otherwise will return else alert
  
  if(randomFortune){
    document.getElementById("result").innerHTML = randomFortune.fortune;
    document.getElementById("result2").innerHTML = randomFortune.stone;
    // (randomFortune.fortune);
  } else {
    alert("You must be dead! Sorry.");
  }
  
}
