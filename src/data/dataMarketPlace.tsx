import React from 'react'

const dataMarketPlace = [
   
    {
        id: 1016,
        name: 'Microwave',
        price: 30, condition: 'Used (fair)',
        length: 12,
        width: 16,
        height: 13,
        description: "Sunbeam SGB8901 .9 Cubic Feet Microwave Oven 900 Watts. This black Sunbeam Microwave looks great in any kitchen. Heat up your leftovers or create fresh meals in this 900-watt, 0.9 cubic foot microwave. It's designed with a turntable for even heating and 9 programs for proper cooking. This is a great microwave for small spaces, it's packed with power at a great value.",
        brand: 'Sunbeam',
        img: ['microwave-1.jpg', 'microwave-2.jpg']
    },
    {
        id: 1002,
        name: 'TV',
        price: 100,
        condition: 'Used (fair)',
        length: 3.125,
        width: 43.8,
        height: '25.5',
        description: '4K 50 in Smart LED Roku TV',
        brand: 'TCL',
        img: [ 'tv-4.jpg',"tv-1.png", 'tv-3.jpg', 'tv-2.jpg']
    },
    {
        id: 1006,
        name: 'Instant pot ',
        price: '40', condition: 'Used (fair)',
        length: '12',
        width: '12',
        height: '13',
        description: '7-IN-ONE: pressure cooker, rice cooker, slow cooker, yogurt maker, steamer, sautŽ pan and food warmer',
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
        description: 'Indoor stationary bike with Ipad mount & comfortable Seat Cushion; minimal noise. This item is 68lbs.',
        brand: 'YOSUDA',
        img: ["stationary-bike.jpg"]
    },
 
    {
        id: 1007,
        name: 'Guitar Pick',
        price: 20, 
        condition: 'New',
        length: 1.77,
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
        description: 'Perfect for drying the handwash or delicate clothes; Spinned clothes dry easily within couple hours indoors; 5 minute timer with automatic stop.',
        brand: 'Panda',
        img: ["spin-drayer-4.jpg", "spin-dryer-1.jpg", "spin-dryer-2.jpg", "spin-dryer-3.jpg"]
    },
    {
        id: 1003,
        name: 'Tesla car',
        price: '60,000', condition: 'New',
        length: '186.7',
        width: 76.1,
        height: 61,
        description: '--RESERVED-- Experience the future of driving with a Red Model Y Tesla. This electric marvel blends sleek style with eco-friendly performance, delivering an unrivaled driving experience.',
        brand: 'Tesla',
        img: ['tesla-1.jpg', 'tesla-2.jpg', 'tesla-3.jpg', 'tesla-4.jpg']
    },
    {
        
        id: 1008,
        name: 'Dumbbells',
        price: '50',
        condition: 'Used (like-new)',
        length: '12.5', width: '5.3',
        height: '4.6',
        description: '2x 25LB Rubber Encased Hex Dumbbell Hand Weight; Non-slip textural surface for a secure grip',
        brand: 'Amazon Basics',
        img: ['dumbbell-1.jpg', 'dumbbell-3.jpg', 'dumbbell2.jpg']
    },
    {
        id: 1009,
        name: 'Heater',
        price: 40,
        condition: 'Used (like-new)',
        length: 19,
        width: 9.4,
        height: 15.25,
        description: '14" Dish Reflector, adjustable tilt, 2 Heat settings - 700 & 1, 000 WATTS;',
        brand: 'Comfort Zone',
        img: [ "heater-2.jpg","heater-1.jpg"]
    },
    {
        id: 1010,
        name: 'Air Purifier'
        , price: 0,
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
        name: 'Ring toss set',
        price: '5',
        condition: 'Used (like-new)',
        length: 6.5,
        width: 6.5
        , height: 11,
        description: 'Set up the 10 vibrant cones and try to score by tossing the 10 color-matching rings right onto them',
        brand: 'Target',
        img: ['hoop-1.jpg', 'hoop-2.jpg']
    },
    {
        id: 1001,
        name: 'Sleep Sofa',
        price: 80,
        condition: 'Used (fair)',
        length: 55.875,
        width: 55.875,
        height: 34.25,
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
        length: 47.25,
        width: 23.625,
        height: 28.75,
        description: 'Strong, sturdy, and lightweight light gray desk; adjustable height',
        brand: 'Ikea LAGKAPTEN / ADILS',
        img: ["ikea-desk-1.png", "ikea-desk-2.png"]
    },
    {
        id: 1014,
        name: 'Chairs',
        price: '25',
        condition: 'Used (fair)',
        length: '15.38', width: '18.5',
        height: '30.38',
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
        width: 13.19,
        height: 1.93,
        description: '10.2" Selfie Ring Light with 65" Adjustable Tripod Stand & Phone Holder, 3 light settings (warm, cool, and day light). Perfect for meetings or streaming!',
        brand: 'Kaiess',
        img: ["ringlight-1.png", "ring-light-2.jpg"]
    },
]


export default dataMarketPlace