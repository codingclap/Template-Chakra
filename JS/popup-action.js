let chakraInfo = {
    'chakra1': {
        'heading': 'Crown Chakra',
        'info': "The crown chakra represents your connection to higher consciousness. This is where you experience that exciting buzz of enlightenment and inspiration. When it's blocked, your forward motion can screech to a halt. You may struggle with depression, cynicism, closed-mindedness, and fear of change. Opening this chakra fully will help you achieve greater self-knowledge and deepen your spiritual connections.<br/><br/>You can open your crown chakra by meditating on the mantra \"OM\" and burning incense like frankincense or myrrh. In your yoga practice, incorporate the Savasana, or Corpse Pose, where you lay on your back with your arms and legs relaxed at your sides."
    },
    'chakra2': {
        'heading': 'Third Eye Chakra',
        'info': "Your third eye chakra is closely associated with your intuition, perception, and imagination. This is where you see the unseen and build a mystical connection with the spirit realm. When this chakra is fully opened, you can unlock your innate psychic abilities and dissolve the illusionary separation between self and spirit. Think of this chakra as your access point to that coveted \"A-ha!\" moment when it all clicks into place and life finally makes sense.<br/><br/>A blocked third eye chakra leads to confusion, indecision, and pessimism. It can leave you feeling adrift in the world, without purpose. Unblock this chakra by applying essential oils like jasmine, lemon, or sandalwood to your forehead (just remember to dilute in a carrier oil first!) Meditate with the mantra\"KSHAM,\" and try the Forward Fold or Folded Eagle yoga pose."
    },
    'chakra3': {
        'heading': 'Throat Chakra',
        'info': "The throat chakra is associated with your ability to communicate. It's connected to your voice both literally and figuratively. Have you been struggling with misunderstandings? Do you feel silenced in a world that's screaming over top of you? A blockage in your throat chakra could be the culprit.<br/><br/>Unblock your throat chakra and unleash your wild, powerful roar! Chant \"HAM\" in your meditations or add the Lion's Breath, Plow, and Fish Pose to your yoga routine. Neck stretches and breathing exercises can help as well. You'll be singing out your truth in no time!"
    },
    'chakra4': {
        'heading': 'Heart Chakra',
        'info': "Located at the center of your heart, it's no surprise that the heart chakra is deeply connected to your emotional well-being. This is where you experience love and compassion. Stress and trauma create major blockages here. While these are sometimes evidenced by isolation and an inability to connect, blockages of the heart chakra can also cause you to give excessively to others to the detriment of your own well-being.<br/><br/>When this chakra is open, you'll experience peace and harmony where love for all is perfectly balanced with love for self. Unblock your heart chakra by meditating on the mantra \"YAM.\" Practice the Camel Pose, Upward Facing Dog, and Bridge Pose in your yoga routine. Keep healing stones like rose quartz and jade close to your heart and fill your life with powerful affirmations like \"I am open to love,\" or \"I have compassion for myself and all living things.\""
    },
    'chakra5': {
        'heading': 'Solar Plexus Chakra',
        'info': "Your independence and vitality flow from your solar plexus chakra. Think of this as your personal inner sun, shining forth and burning away impossibilities or fears. When this chakra is blocked, you may experience stomach problems, heartburn, and low self-esteem. An open solar plexus chakra is the key to having that magical combination of self-confidence and humility.<br/><br/>Open the solar plexus chakra with powerful yoga poses like the Warrior Pose and Sun Salutations. Meditate on the powerful mantra \"RAM.\" Repeat simple but powerful affirmation like \"I am enough,\" and BELIEVE IT because you truly are enough."
    },
    'chakra6': {
        'heading': 'Sacral Chakra',
        'info': "Creativity, sexuality, and passion flow from the sacral chakra. When it's healthy, you'll have no trouble forming strong relationships and trusting connections with others. If you struggle with guilt or feel as though you're being judged, you may have a blockage here.<br/><br/>Unblock your sacral chakra and let your true abilities flow forth uninhibited. Try meditating on the mantra \"VAM\" to supercharge your sacral chakra and blast away blockages. The Bridge Pose and Pigeon Pose will serve your sacral chakra through your yoga practice. Healthy sexual relationships can also balance this chakra, but you should be very mindful in this area and avoid any connections that aren't helping you become your best self."
    },
    'chakra7': {
        'heading': 'Root Chakra',
        'info': "As the name suggests, this chakra roots you to the earth and creates a sense of stability. A healthy root chakra leaves you feeling strong and grounded, with deep roots that keep you connected to who you are. When this chakra is blocked, you may experience anger, fear, bad dreams, and a lack of trust.<br/><br/>Unblock the root chakra by meditating with the mantra \"LAM.\" Connect to your feet with barefoot walks in nature and therapeutic foot rubs. Try yoga poses such as Tree Pose and Mountain Pose. Repeat affirmations like \"I am safe,\" and \"The universe provides for me.\" You'll soon find your grounding again."
    }
};

function addChakra(chakraNum){
    let chakras = document.getElementById('enlighted-human');
    let strokes = chakras.getElementsByClassName('chakra');

    for(i=0;i<strokes.length;i++){
        strokes[i].classList.remove("on")
    }

    let details = chakraInfo[chakraNum];
    let heading = document.getElementsByClassName('chakra-name');
    let info = document.getElementsByClassName('chakra-info');
    let container = document.getElementsByClassName('chakra-detail-container')

    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    console.log(width)
    if(width > 550){
        container[1].style.display = 'block';
    } else{
        container[0].style.display = 'block';
    };

    for(i=0;i<heading.length;i++){
    heading[i].innerHTML = details['heading'];
    info[i].innerHTML = details['info'];
    }

    let indicator = document.getElementById('indicator-container');

    indicator.style.display = 'none';

    let chakra = document.getElementById(chakraNum);
    let lines = chakra.getElementsByClassName('chakra');

    for(i=0;i<lines.length;i++){
        lines[i].classList.add("on")
    }
}

function closePopup(className='chakra-detail-container') {
    let chakras = document.getElementById('enlighted-human');
    let strokes = chakras.getElementsByClassName('chakra');

    for(i=0;i<strokes.length;i++){
        strokes[i].classList.remove("on")
    }

    let element = document.getElementsByClassName(className)

    for(i=0;i<element.length;i++){
    element[i].style.display = 'none';
    }

    let indicator = document.getElementById('indicator-container');

    indicator.style.display = 'block';
}
