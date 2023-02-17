const slogans = [ "If u pollute the air, then the air will pollute u!",
    "No Solution, more Air Pollution!",
    "Give Me Clean Air or Give Me Death",
    "Breath healthy and be healthy",
    "Smokey? REPAIR!! Care for the air.",
    "Kill Air Pollution",
    "I Deserve the Blue",
    "Don’t Besmear the Atmosphere",
    "The Simple Life Causes Less Strife.",
    "Let’s clear the air",
    "You are what you breathe",
    "Don’t be a brute! Don’t pollute!",
    "Remove Pollution, increase the life",
    "Don’t Be Mean keep your planet clean",
    "Stop factories and industries, and gain more rain.",
    "Clean Air for a better future",
    "Let’s Move Towards Green",
    "Rise the voice Agains pollution",
    "Care for air.",
    "Save the critters, don’t litter!",
    "Stop air pollution before it stops our breathing.",
    "Save your breath to feel free",
    "Stop pollution by mitigation.",
    "Because you deserve to breathe clean",
    "Don’t be part of air pollution",
    "Air Pollution is a silent enemy",
    "Show care about the air.",
    "Because you deserve to feel secure",
    "Take a deep breath, don’t choke.",
    "Global warming is real. Don’t pollute it.",
    "Air Pollution isn’t cool so don’t be a fool.",
    "Less Air pollution is the best solution",
    "Join the revolution, stop the Air pollution!",
    "When They Run Out, You’ll Be Without.",
    "Whoever pollutes is our common enemy.",
    "Wipe Out Pollution Before It Wipes You Out.",
    "YOU are the key to cleaner Air.",
    "Take Care Of The Trees, They Will Take Care Of You.",
    "Air Pollution – The Silent Killer",
    "Be nice to the air, we have to share",
    "Air Pollution is not a joke. Air Pollution will make you choke",
    "Pure Air, Pure life",
    "Do care for the air",
    "Polluting is not fair.",
    "Air Pollution is a slow poison",
    "Say no to air pollution",
    "Don’t cut trees is a risk",
    "Let the greenery rise",
    "Be safe, Be aware",
    "Don’t you dare to pollute the air?"
]
     


setInterval(function(){ 

    let min =1,max=50;
    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    let heading=document.getElementById('heading');
    heading.innerHTML=slogans[rand]


}, 3000);



