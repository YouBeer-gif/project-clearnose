function Chooselanguage(language){
    let change ={
        EN:{
            PRODUCTS : 'PRODUCTS',
            STORELOCATOR : 'STORE LOCATOR',
            SOCIETY : 'SOCIETY',
            CONTACTUS : 'CONTACT US',
        },
        TH:{
            PRODUCTS : 'สินค้า',
            STORELOCATOR : 'ที่ตั้งร้านค้า',
            SOCIETY : 'สังคม',
            CONTACTUS : 'ติดต่อเรา',
        }
    }
    document.getElementById('PRODUCTS').innerText = change[language].PRODUCTS;
    document.getElementById('STORELOCATOR').innerText = change[language].STORELOCATOR;
    document.getElementById('SOCIETY').innerText = change[language].SOCIETY;
    document.getElementById('CONTACTUS').innerText = change[language].CONTACTUS;
}