import kebab1 from "./assets/kebab1.webp"
import kebab2 from "./assets/kebab2.png"
import kebab3 from "./assets/kebab3.png"
import kebab4 from "./assets/kebab4.JPG"
import salat1 from "./assets/salat1.jpg"
import salat2 from "./assets/salat2.jpg"
import salat3 from "./assets/salat3.jpg"
import salat4 from "./assets/salat4.jpg"
import shurva1 from "./assets/shurva1.jpg"
import shurva2 from "./assets/shurva2.jpg"
import durum1 from "./assets/durum1.jpg"
import durum2 from "./assets/durum2.jpg"
import durum3 from "./assets/durum3.jpg"
import durum4 from "./assets/durum4.jpg"
import pizza1 from "./assets/pizza1.jpg"
import pizza2 from "./assets/pizza2.jpg"
import pizza3 from "./assets/pizza3.jpg"
import pizza4 from "./assets/pizza4.jpg"
import desert1 from "./assets/desert1.jpg"
import desert2 from "./assets/desert2.jpg"
import desert3 from "./assets/desert3.jpg"
import desert4 from "./assets/desert5.webp"

const menu = [
    {
        id: 1,
        name: "САРМА БЕЙТИ",
        category: "Kebab",
        price: 10000,
        image: kebab1,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 2,
        name: "САРМА БЕЙТИ",
        category: "Kebab",
        price: 10000,
        image: kebab2,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 3,
        name: "САРМА БЕЙТИ",
        category: "Kebab",
        price: 10000,
        image: kebab3,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 4,
        name: "САРМА БЕЙТИ",
        category: "Kebab",
        price: 10000,
        image: kebab4,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 5,
        name: "САРМА БЕЙТИ",
        category: "Salat",
        price: 10000,
        image: salat1,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 6,
        name: "САРМА БЕЙТИ",
        category: "Salat",
        price: 10000,
        image: salat2,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 7,
        name: "САРМА БЕЙТИ",
        category: "Salat",
        price: 10000,
        image: salat3,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 8,
        name: "САРМА БЕЙТИ",
        category: "Salat",
        price: 10000,
        image: salat4,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 9,
        name: "САРМА БЕЙТИ",
        category: "Sho'rva",
        price: 10000,
        image: shurva1,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 10,
        name: "САРМА БЕЙТИ",
        category: "Sho'rva",
        price: 10000,
        image: shurva2,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 11,
        name: "САРМА БЕЙТИ",
        category: "Durum",
        price: 10000,
        image: durum1,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 12,
        name: "САРМА БЕЙТИ",
        category: "Durum",
        price: 10000,
        image: durum2,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 13,
        name: "САРМА БЕЙТИ",
        category: "Durum",
        price: 10000,
        image: durum3,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 14,
        name: "САРМА БЕЙТИ",
        category: "Durum",
        price: 10000,
        image: durum4,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 15,
        name: "САРМА БЕЙТИ",
        category: "Pizza",
        price: 10000,
        image: pizza1,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 16,
        name: "САРМА БЕЙТИ",
        category: "Pizza",
        price: 10000,
        image: pizza2,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 17,
        name: "САРМА БЕЙТИ",
        category: "Pizza",
        price: 10000,
        image: pizza3,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 18,
        name: "САРМА БЕЙТИ",
        category: "Pizza",
        price: 10000,
        image: pizza4,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 19,
        name: "САРМА БЕЙТИ",
        category: "Desert",
        price: 10000,
        image: desert1,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 20,
        name: "САРМА БЕЙТИ",
        category: "Desert",
        price: 10000,
        image: desert2,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 21,
        name: "САРМА БЕЙТИ",
        category: "Desert",
        price: 10000,
        image: desert3,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
    {
        id: 22,
        name: "САРМА БЕЙТИ",
        category: "Desert",
        price: 10000,
        image: desert4,
        description: "МОЛОТЫЙ ШАШЛЫК, ЛАВАШ, ПОМИДОРЫ, СЮЗЬМА."
    },
];
export default menu;