document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search.substring(1);

    const pageMappings = {
        "1v1.lol": "/0/g/1v1lol/",
        "1v1.lol-method-2": "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/edit@main/d3hjf73j2e92ge4y.xml",
        "justfall.lol": "/0/g/just-fall/",
        "cluster-rush": "/0/g/cluster-rush/",
        "1": "/0/g/1/",
        "2048": "/0/g/2048/",
        "wings.io": "http://wings.io",
        "roblox": "/0/g/Roblox/",
        "gacha-club": "/0/g/gacha-club/",
        "papas-burgeria": "/0/g/papas-burgeria/",
        "papas-doggeria": "/0/g/papas-doggeria/",
        "doge-miner": "/0/g/doge-miner/",
        "papas-pancakeria": "/0/g/papas-pancakeria/",
        "papas-scooperia": "/0/g/papas-scooperia/",
        "repuls.io": "/0/g/repuls/",
        "flash-sonic": "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fultimate-flash-sonic.xml",
        "sonic-revert": "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@e9968afeca44cc43b16d23cd23af95e6a4e23887/ks85nc4/Sonic_Revert.xml",
        "subway-surfers": "https://da211f97-3b87-4f53-9b9f-34d3fbc5d016.id.repl.co",
    };

    const filePath = pageMappings[queryString];

    if (filePath) {
        document.getElementById("content").src = filePath;
    }
});