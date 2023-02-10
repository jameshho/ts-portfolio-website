const dataMarketPlace = [
   
    {
        id: 1016,
        name: 'Microwave',
        price: 30, condition: 'Used (fair)',
        length: 12,
        width: 16,
        height: 13,
        description: "Sunbeam SGB8901 Microwave. With a 900-watt output and 0.9 cubic feet of space, this compact appliance is perfect for small kitchens. The turntable ensures even heating, while the 9 pre-set programs make cooking a breeze.",
        brand: 'Sunbeam',
        img: ['microwave-1.jpg', 'microwave-2.jpg']
    },
    {
        id: 1002,
        name: "TCL 50' Roku TV",
        price: 100,
        condition: 'Used (fair)',
        length: 3.1,
        width: 43.8,
        height: 25.5,
        description: 'Seamless streaming on 50" Smart TV 50S425 with pre-installed Apple TV and YouTube. Wireless connectivity to connect phone and share content. Stunning picture quality with 50" 4K display. Elevate home entertainment.',
        brand: 'TCL',
        img: ["tv-1.jpg", 'tv-2.jpg', 'tv-3.jpg']
    },
    {
        id: 1006,
        name: 'Instant pot ',
        price: '40', condition: 'Used (fair)',
        length: 12,
        width: 12,
        height: 13,
        description: 'The 7-in-1 pressure cooker is a versatile kitchen appliance, functioning as a rice cooker, slow cooker, yogurt maker, steamer, sauté pan, and food warmer. Ideal for preparing rice, curry, soup and more.',
        brand: 'Instant Pot',
        img: ["instant-pot.jpg"]
    },
    {
        id: 1004,
        name: 'Stationary bike', 
        price: 120,
        condition: 'Used(like - new)',
        length: 40,
        width: 22,
        height: 45,
        description: 'YOSUDA indoor stationary bike with iPad mount, comfortable seat cushion, minimal noise, and speed/time tracking. 68lbs, not easily transportable.',
        brand: 'YOSUDA',
        img: ["stationary-bike.jpg"]
    },
 
    {
        id: 1007,
        name: 'Guitar Pick',
        price: 20, 
        condition: 'New',
        length: 1.8,
        width: 0.1,
        
        height: 1.18,
        description: "--RESERVED--The pick used by top musicians worldwide. Whether you're playing searing electric leads or strumming acoustic passages, the appeal of Tortex as a sonic paintbrush is universal.",
        brand: 'Tortex',
        img: ['pick-1.jpg', 'pick-2.jpg', 'pick-3.jpg']
    },
    {
        id: 1011,
        name: 'Spin Dryer',
        price: '100',
        condition: 'Used (like-new)',
        length: 13.5,
        width: 13.5,
        height: 25.5,
        description:"Efficiently dry your handwashed or delicate garments with ease using this Spin Dryer. Designed to spin clothes dry in just a couple of minutes. The 5-minute timer features automatic shut-off, making it convenient and easy to use.",
        brand: 'Panda',
        img: ["spin-drayer-4.jpg", "spin-dryer-1.jpg", "spin-dryer-2.jpg", "spin-dryer-3.jpg"]
    },
    {
        id: 1003,
        name: 'Tesla car',
        price: '60,000', condition: 'New',
        length: 186.7,
        width: 76.1,
        height: 61,
        description: '--RESERVED-- Experience the future of driving with a Red Model Y Tesla. This electric marvel blends sleek style with eco-friendly performance, delivering an unrivaled driving experience.',
        brand: 'Tesla',
        img: ['tesla-1.jpg', 'tesla-2.jpg', 'tesla-3.jpg', 'tesla-4.jpg']
    },
    {
        
        id: 1008,
        name: '25lbs Dumbbell x2',
        price: 50,
        condition: 'Used (like-new)',
        length: 12.5, 
        width: 5.3,
        height: 4.6,
        description: '2x 25LB Rubber Encased Hex Dumbbell Hand Weight; Non-slip textural surface for a secure grip',
        brand: 'Amazon Basics',
        img: ['dumbbell-1.jpg', 'dumbbell2.jpg']
    },
    {
        id: 1009,
        name: 'Heater',
        price: 40,
        condition: 'Used (like-new)',
        length: 19,
        width: 9.4,
        height: 15.3,
        description: '14" Dish Reflector, adjustable tilt, 2 Heat settings - 700 & 1, 000 WATTS;',
        brand: 'Comfort Zone',
        img: ["heater-1.jpg"]
    },
    {
        id: 1010,
        name: 'Air Purifier'
        , price: 30,
        condition: 'Used(fair)',
        length: 13.5,
        width: 8.9,
        height: 14,
        description: 'Helps capture up to 99.97% of microscopic airborne allergens and particles, including smoke, dust, pollen, pet dander and dust mite debris. Honeywell air purifier including 1 HEPA Filters plus 7 precut Activated Carbon Pre-Filters',
        brand: 'Honeywell',
        img: ["air-1.jpg", "air-2.png"]
    },

    {
        id: 1005,
        name: 'Ring Toss Set',
        price: 5,
        condition: 'Used (like-new)',
        length: 6.5,
        width: 6.5
        , height: 11,
        description: 'Step up to the challenge with the fun and exciting Ring Toss Set! Set up the cones and see who can score the most points by tossing the rings and landing them on the cones. Get ready for a thrilling competition with friends and family.',
        brand: 'Target',
        img: ['hoop-1.jpg', 'hoop-2.jpg']
    },
    {
        id: 1001,
        name: 'Sleep Sofa',
        price: 80,
        condition: 'Used (fair)',
        length: 55.9,
        width: 55.9,
        height: 34.3,
        description: 'This sofa quickly and easily turns into a bed for two.',
        brand: 'Ikea',
        img: ["sleeper-sofa-1.png", "sleeper-sofa-2.png", "sleeper-sofa-3.png"]
    },
    {
        id: 1012,
        name: 'Monitor',
        price: 20,
        condition: 'Used (fair)',
        length: 21.2,
        width: 6.8,
        height: 16.5,
        description: 'BenQ 22 Inch Monitor with 1080p, IPS Panel & Eye-Care Technology G2222HDL including cable',
        brand: 'BenQ',
        img: ["benq-monitor-1.webp"]
    },
    {
        id: 1013,
        name: 'Desk',
        price: 40,
        condition: 'Used (fair)',
        length: 47.3,
        width: 23.7,
        height: 28.8,
        description: 'Strong, sturdy, and lightweight light gray desk; adjustable height',
        brand: 'Ikea LAGKAPTEN / ADILS',
        img: ["ikea-desk-1.png", "ikea-desk-2.png"]
    },
    {
        id: 1014,
        name: 'Chairs',
        price: 25,
        condition: 'Used (fair)',
        length: 15.4, 
        width: 18.5,
        height: 30.4,
        description: '5 chairs; Light, airy and stackable ADDE is easy to store away when you want to clean, dance or just need a little more floor space.',
        brand: 'Ikea ADDE',
        img: ["ikea-chair-2.png", "ikea-chair-1.png"]
    },
    {
        id: 1015,
        name: 'Ringlight',
        price: 15,
        condition: 'Used (like-new)',
        length: 17.6,
        width: 13.2,
        height: 1.9,
        description: '10.2" Selfie Ring Light with 65" Adjustable Tripod Stand & Phone Holder, 3 light settings (warm, cool, and day light). Perfect for meetings or streaming!',
        brand: 'Kaiess',
        img: ["ringlight-1.png", "ring-light-2.jpg"]
    },
]


export default dataMarketPlace