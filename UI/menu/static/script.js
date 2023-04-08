
$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 4,
    loop: true,
    lazyLoad: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        485: {
            items: 2,
            dots: false
        },
        728: {
            items: 3,
            dots: false
        },
        960: {
            items: 4,
            dots: false
        },
        1200: {
            items: 4,
            dots: true
        }
    }
});

console.log("script.js loaded");
var option = {
    //AMAZON
    Agenda: 'https://www.amazon.in/Champs-Agenda-Light-Weight-Running/dp/B099SBH9KF',
    Altroz: 'https://www.amazon.in/Champs-ShoesN-Blue-MUSTRED-ALTROZ-NBMS-7/dp/B09LZ6S1DW/ref=sr_1_1?keywords=champs+altroz&qid=1640178020&sr=8-1',
    Diva: 'https://www.amazon.in/Champs-Womens-Light-Weight-Casual/dp/B08P7N6NYY/ref=sr_1_1?crid=35GDKKWD5E4QR&keywords=champs+diva&qid=1640178092&sprefix=champs+diva%2Caps%2C332&sr=8-1',
    Crystal: 'https://www.amazon.in/Champs-Crystal-Workout-Shoes-Black/dp/B08H8R3HC5/ref=sr_1_4?crid=OWYE4789NLYB&keywords=champs+crystal&qid=1640178165&sprefix=campus+crystal%2Caps%2C221&sr=8-4',
    armour : 'https://www.amazon.in/Champs-Armour-Weight-Running-N-Blue/dp/B09416G1X2/ref=sr_1_1?crid=OP5B07CP1WLZ&keywords=champs+armour&qid=1640181586&sprefix=champs+armour%2Caps%2C252&sr=8-1',
    baleno : 'https://www.amazon.in/Champs-BALENO-Light-Weight-Running/dp/B08LF272GS/ref=sr_1_1?crid=3SHBKEULGK97B&keywords=champs+baleno&qid=1640181681&sprefix=campus+baleno%2Caps%2C265&sr=8-1',
    basic : 'https://www.amazon.in/Champs-Basic-Casual-Shoes-Black/dp/B09417W9QH/ref=sr_1_3?crid=2OP63UV4WGBB7&keywords=champs+basic&qid=1640181736&sprefix=champs+basic%2Caps%2C266&sr=8-3',
    belgium: 'https://www.amazon.in/Campus-Belgium-Running-Shoes-8-5G-659/dp/B07ZCS74R4/ref=sr_1_1?crid=272NEM2GSTE3B&keywords=campus+belgium&qid=1640181777&sprefix=campus+belgium%2Caps%2C275&sr=8-1',
    brave:'https://www.amazon.in/Champs-Brave-Running-Shoes-N-Blue/dp/B08H8RD2VH/ref=sr_1_1?crid=3PJ2ZDPXH3CKI&keywords=champs+brave&qid=1640181972&sprefix=campus+brave%2Caps%2C272&sr=8-1',
    brazil: 'https://www.amazon.in/Champs-Brazil-Light-Weight-Running/dp/B08LDX8YP3/ref=sr_1_1?crid=1X93OVVC2NIW2&keywords=champs+brazil&qid=1640182066&sprefix=campus+brazil%2Caps%2C313&sr=8-1',
    dragon : 'https://www.amazon.in/Campus-Dragon-Pro-Running-Shoes-7-5G-674/dp/B07Y23YMNK/ref=sr_1_2?crid=3UG3MDRHJKGTR&keywords=campus+dragon&qid=1640182409&sprefix=campus+dragon%2Caps%2C289&sr=8-2',
    focus: 'https://www.amazon.in/Campus-Stonic-Running-Shoes-7-5G-680/dp/B07XBSV88S/ref=sr_1_3?crid=1U39JTAAQBOWI&keywords=campus+focus&qid=1640182536&sprefix=campus+focus%2Caps%2C334&sr=8-3',
    glory: 'https://www.amazon.in/Champs-Glory-Womens-Weight-Running/dp/B08NC9ZN3T/ref=sr_1_1?crid=3THLOJ125HO4P&keywords=champs+glory&qid=1640182821&sprefix=campus+glory%2Caps%2C388&sr=8-1',
    harris1: 'https://www.amazon.in/Champs-Harris-Womens-Light-Weight/dp/B09F2KVYNP/ref=sr_1_1?crid=DXFLK4X3P4E7&keywords=champs+harris&qid=1640182887&sprefix=champs+harris%2Caps%2C323&sr=8-1',
    north: 'https://www.amazon.in/Champs-North-Mens-Breathable-Shoes/dp/B08LDZC882/ref=sr_1_1?crid=BJEAN6UVFQUH&keywords=champs+north&qid=1640183012&sprefix=campus+north%2Caps%2C381&sr=8-1',
    oscar: 'https://www.amazon.in/Champs-Oscar-Light-Weight-Running/dp/B09F2P34W7/ref=sr_1_1?crid=38I4YBKO81GRR&keywords=champs+oscar&qid=1640183080&sprefix=champs+oscar%2Caps%2C442&sr=8-1',
    panther: 'https://www.amazon.in/Champs-Panther-Weight-Running-N-Blue/dp/B08TVQHFLH/ref=sr_1_1?crid=3IJ2EM26V9RDD&keywords=champs+panther&qid=1640183115&sprefix=campus+panther%2Caps%2C323&sr=8-1',
    solo : 'https://www.amazon.in/Champs-Weight-Running-T-Blue-Orange/dp/B09C646XC2/ref=sr_1_1?crid=2HXU37B3TNL0G&keywords=champs+solo&qid=1640183324&sprefix=campus+solo%2Caps%2C261&sr=8-1',
    biden:'https://www.amazon.in/Champs-Biden-Light-Weight-Running/dp/B08TVQDPX2/ref=sr_1_3?crid=3B2UJLG50IXKH&keywords=champs+biden&qid=1640362783&s=shoes&sprefix=champs+bid%2Cshoes%2C998&sr=1-3',
    biden2:'https://www.amazon.in/Champs-BIDEN-2-Weight-Running-T-Blue/dp/B09C62JZXD/ref=sr_1_1?crid=3B2UJLG50IXKH&keywords=champs+biden&qid=1640362783&s=shoes&sprefix=champs+bid%2Cshoes%2C998&sr=1-1',
    biden3:'https://www.amazon.in/Champs-BIDEN-3-Weight-Running-D-Grey/dp/B09C62QKX5/ref=sr_1_6?crid=3B2UJLG50IXKH&keywords=champs+biden&qid=1640362783&s=shoes&sprefix=champs+bid%2Cshoes%2C998&sr=1-6',
    biden4:'https://www.amazon.in/Champs-Runing-ShoesBlack-BIDEN-4-BKBK-7/dp/B09LZ82V67/ref=sr_1_4?crid=3B2UJLG50IXKH&keywords=champs+biden&qid=1640362783&s=shoes&sprefix=champs+bid%2Cshoes%2C998&sr=1-4',
    biden5:'https://www.amazon.in/Champs-Runing-ShoesBlack-BIDEN-5-BKBK-9/dp/B09LZ6ZBM1/ref=sr_1_5?crid=3B2UJLG50IXKH&keywords=champs+biden&qid=1640362783&s=shoes&sprefix=champs+bid%2Cshoes%2C998&sr=1-5',
    biden6:'https://www.amazon.in/Champs-Runing-ShoesN-Blue-BIDEN-6-NBNB-7/dp/B09LZ76MT3/ref=sr_1_13?crid=3B2UJLG50IXKH&keywords=champs+biden&qid=1640362783&s=shoes&sprefix=champs+bid%2Cshoes%2C998&sr=1-13',
    cyber:'https://www.amazon.in/Champs-Cyber-Weight-Running-T-Blue/dp/B0933CZ5MB/ref=sr_1_1?crid=S4FXCFHSNWWG&keywords=champs+cyber+shoes&qid=1640363122&sprefix=champs+cyber+shi%2Caps%2C1126&sr=8-1',
    gama1:'https://www.amazon.in/Champs-Running-Shoes-UK-10-Black/dp/B08H8QZ8K9/ref=sr_1_1?crid=6Q4Q6YFHYFOV&keywords=champs+gama+1+shoes&qid=1640363271&sprefix=champs+gama+shoes%2Caps%2C571&sr=8-1',
    gama2:'https://www.amazon.in/Champs-GAMA-2-Light-Weight-Running/dp/B08TWZMLL1/ref=sr_1_2?crid=6Q4Q6YFHYFOV&keywords=champs+gama+1+shoes&qid=1640363271&sprefix=champs+gama+shoes%2Caps%2C571&sr=8-2',
    harris2:'https://www.amazon.in/Champs-Weight-ShoesPEACH-HARRIS-2-PCPC-6/dp/B09LZJRRH7/ref=sr_1_1?crid=3JXVZ4F16LRRB&keywords=champs+harris+2+shoes&qid=1640363423&sprefix=champs+harris+2+shoes%2Caps%2C426&sr=8-1',
    harris3:'https://www.amazon.in/Champs-Weight-ShoesONION-HARRIS-3-ONON-4/dp/B09LZ7M23M/ref=sr_1_1?crid=2E5H5GS7KINLJ&keywords=champs+harris+3+shoes&qid=1640363495&sprefix=champs+harris+3+shoes%2Caps%2C694&sr=8-1',
    harris4:'https://www.amazon.in/Champs-Weight-ShoesONION-HARRIS-4-ONON-7/dp/B09LZ7QM6B/ref=sr_1_1?crid=2B03P7Y6SPJSS&keywords=champs+harris+4+shoes&qid=1640363533&sprefix=champs+harris+4+shoes%2Caps%2C362&sr=8-1',
    harris5:'https://www.amazon.in/Champs-Weight-ShoesPEACH-HARRIS-5-PCPC-4/dp/B09LZ93YJP/ref=sr_1_2?crid=11GWYZBERAH9J&keywords=champs+harris+5+shoes&qid=1640363567&sprefix=champs+harris+shoes%2Caps%2C560&sr=8-2',
    harris6:'https://www.amazon.in/Champs-Weight-ShoesONION-HARRIS-6-ONON-5/dp/B09LZ81N8M/ref=sr_1_1?crid=11GWYZBERAH9J&keywords=champs+harris+5+shoes&qid=1640363567&sprefix=champs+harris+shoes%2Caps%2C560&sr=8-1',
    harris7:'https://www.amazon.in/Champs-Weight-ShoesPEACH-HARRIS-7-PCPC-5/dp/B09LZ744MK/ref=sr_1_4?crid=11GWYZBERAH9J&keywords=champs+harris+5+shoes&qid=1640363567&sprefix=champs+harris+shoes%2Caps%2C560&sr=8-4',
    harris8:'https://www.amazon.in/Champs-Weight-ShoesMAROON-HARRIS-8-MRMR-5/dp/B09LZ7WH48/ref=sr_1_3?crid=11GWYZBERAH9J&keywords=champs+harris+5+shoes&qid=1640363567&sprefix=champs+harris+shoes%2Caps%2C560&sr=8-3',
    power1:'https://www.amazon.in/Champs-POWER-1-Weight-Running-N-Blue/dp/B09415HGPW/ref=sr_1_1?crid=31G25PARJKYMQ&keywords=champs+power+1+shoes&qid=1640363784&sprefix=champs+power+1+shoes%2Caps%2C546&sr=8-1',
    power3:'https://www.amazon.in/Champs-POWER-3-Light-Weight-Running/dp/B094184NG8/ref=sr_1_2?crid=31G25PARJKYMQ&keywords=champs+power+1+shoes&qid=1640363835&sprefix=champs+power+1+shoes%2Caps%2C546&sr=8-2',
    stonex:'https://www.amazon.in/Champs-STONEX-Light-Weight-Running/dp/B09F2WHXXB/ref=sr_1_1?crid=3I25QN71CA3QH&keywords=champs+stonex+shoes&qid=1640363985&sprefix=champs+stone+shoes%2Caps%2C487&sr=8-1',
    paris:'https://www.amazon.in/Champs-Paris-Light-Weight-Running/dp/B09F2WLL4V/ref=sr_1_1?keywords=champs+paris&qid=1640412500&sr=8-1',
    prime:'https://www.amazon.in/Champs-Prime-Light-Weight-Running/dp/B09F2NQPMK/ref=sr_1_1?crid=17QV5XS1J7MCV&keywords=champs+prime&qid=1640412599&sprefix=campus+prime%2Caps%2C298&sr=8-1',
    rainbow:'https://www.amazon.in/Champs-Rainbow-Womens-Weight-Running/dp/B08Y626917/ref=sr_1_1?crid=3K76EB3H16G68&keywords=champs+rainbow&qid=1640412675&sprefix=campus+rainbow%2Caps%2C278&sr=8-1',
    recall:'https://www.amazon.in/Champs-Recall-Light-Weight-Running/dp/B09417KV2Y/ref=sr_1_1?crid=1526HN9RSPKT5&keywords=champs+recall&qid=1640412777&sprefix=champs+recal%2Caps%2C265&sr=8-1',
    scope:'https://www.amazon.in/Champs-Scope-Light-Weight-Running/dp/B08TX1KY24/ref=sr_1_2?crid=6ZPA9K6WK97D&keywords=champs+scope&qid=1640412860&sprefix=champs+scope%2Caps%2C318&sr=8-2',
    unik:'https://www.amazon.in/Champs-UNIK-Light-Weight-Running/dp/B09417JT34/ref=sr_1_1?crid=2P8XMBL02HN3N&keywords=champs+unik&qid=1640412939&sprefix=campus+unik%2Caps%2C304&sr=8-1',
    wanted:'https://www.amazon.in/Champs-ShoesN-Blue-MUSTRED-Wanted-NBMS-8/dp/B09LZ61D71/ref=sr_1_2?crid=SDSF4KOLK53O&keywords=champs+wanted&qid=1640413062&sprefix=champs+wanted%2Caps%2C317&sr=8-2',
    
    //FLIPKART
    Agendaf: 'https://www.flipkart.com/champs-agenda-on-running-shoes-men/p/itmfbe08c61c7389?pid=SHOFV927ZXG6FSYX&lid=LSTSHOFV927ZXG6FSYXTB5ZOP&marketplace=FLIPKART&q=champs+shoes&store=osp%2Fcil%2F1cu&srno=s_1_9&otracker=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&fm=SEARCH&iid=cd8e90d2-bf08-4e4b-84b0-ff1097f8e427.SHOFV927ZXG6FSYX.SEARCH&ppt=sp&ppn=sp&ssid=zxclw0g2yo0000001640181180009&qH=5d23827bb2b5b4b5',
    Altrozf: 'https://www.flipkart.com/champs-altroz-on-running-shoes-men/p/itm707b055cb5c4b?pid=SHOG8RAQ3HNBUSY9&lid=LSTSHOG8RAQ3HNBUSY9COTOTB&marketplace=FLIPKART&q=champs+altroz&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=5f155dc7-9cc8-4e3b-84be-0420e37e95af.SHOG8RAQ3HNBUSY9.SEARCH&ppt=hp&ppn=homepage&ssid=m1m5jsivb40000001640184238241&qH=f344565d731249d4',
    armourf:'https://www.flipkart.com/champs-armour-on-running-shoes-men/p/itm9bd86f3626fed?pid=SHOG2FEJ4FUDE7GW&lid=LSTSHOG2FEJ4FUDE7GWUI5ORI&marketplace=FLIPKART&q=champs+armour&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=3b389f07-c184-49df-9c0a-08663bfd21cf.SHOG2FEJ4FUDE7GW.SEARCH&ppt=sp&ppn=sp&ssid=371p151htc0000001640184286230&qH=f7561748555984fa',
    balenof:'https://www.flipkart.com/champs-baleno-on-running-shoes-men/p/itm66f8930bb6802?pid=SHOFWHJKKHXHUJ4D&lid=LSTSHOFWHJKKHXHUJ4DINUQP3&marketplace=FLIPKART&q=champs+baleno&store=search.flipkart.com&srno=s_1_2&otracker=search&otracker1=search&fm=SEARCH&iid=9ee77802-13e9-406b-a616-bef8d6ab2223.SHOFWHJKKHXHUJ4D.SEARCH&ppt=sp&ppn=sp&ssid=wt4xebwhmo0000001640184333505&qH=a7520b58907cfe39',
    basicf:'https://www.flipkart.com/champs-basic-sneakers-men/p/itm439ff3b219d84?pid=SHOFV9YD5TDPJBCE&lid=LSTSHOFV9YD5TDPJBCE9YNCIO&marketplace=FLIPKART&q=champs+basic&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=6351cf98-a054-41ac-9508-6a7003d93377.SHOFV9YD5TDPJBCE.SEARCH&ppt=sp&ppn=sp&ssid=xx89xa84sg0000001640184371149&qH=fb2e2390de046a5d',
    belgiumf:'https://www.flipkart.com/champs-belgium-on-running-shoes-men/p/itm9bee055555f04?pid=SHOG2FEJVKGJFQGD&lid=LSTSHOG2FEJVKGJFQGDU2XJUG&marketplace=FLIPKART&q=champs+belgium&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=afefcc73-7641-4edb-ae4b-c900862a0d60.SHOG2FEJVKGJFQGD.SEARCH&ppt=sp&ppn=sp&ssid=6dbzwidjuo0000001640184424465&qH=c5d40cb64d01097c',
    bravef:'https://www.flipkart.com/champs-brave-on-running-shoes-men/p/itm95f8ae4eedcaf?pid=SHOFZHX6FYKWFFQW&lid=LSTSHOFZHX6FYKWFFQWLUOUS0&marketplace=FLIPKART&q=champs+brave&store=search.flipkart.com&srno=s_1_3&otracker=search&otracker1=search&fm=SEARCH&iid=c9d9a131-2275-466b-92c3-cce70ea7a14c.SHOFZHX6FYKWFFQW.SEARCH&ppt=sp&ppn=sp&ssid=l6vrdb3h0g0000001640184460870&qH=9318340e3bf898f1',
    brazilf:'https://www.flipkart.com/champs-brazil-on-running-shoes-men/p/itmdcccf1c8e4c4a?pid=SHOFZMNG6FUQZAZ9&lid=LSTSHOFZMNG6FUQZAZ97CQJDW&marketplace=FLIPKART&q=champs+brazil&store=search.flipkart.com&srno=s_1_2&otracker=search&otracker1=search&fm=SEARCH&iid=a7350dd0-9b3f-42c5-81df-b6c68276f9e4.SHOFZMNG6FUQZAZ9.SEARCH&ppt=sp&ppn=sp&ssid=duiyh8ujpc0000001640184497548&qH=7c546077d5929b14',
    crystalf:'https://www.flipkart.com/champs-crystal-running-shoes-men/p/itm02f306fa3cee2?pid=SHOFWHJKSVGJXWFC&lid=LSTSHOFWHJKSVGJXWFCAHVG8Q&marketplace=FLIPKART&q=champs+crystal&store=search.flipkart.com&srno=s_1_3&otracker=search&otracker1=search&fm=SEARCH&iid=4ee423ae-3ca4-418f-9bdc-168bf191ec11.SHOFWHJKSVGJXWFC.SEARCH&ppt=sp&ppn=sp&ssid=2ubxz9yz740000001640184574915&qH=65e51b33e8527097',
    divaf:'https://www.flipkart.com/champs-diva-2-on-sneakers-women/p/itm57cd943c7aef3?pid=SHOFZNPDZCRAYG9M&lid=LSTSHOFZNPDZCRAYG9ML8MAK9&marketplace=FLIPKART&q=champs+diva&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=9a141014-f339-4201-ab6a-530fd849087b.SHOFZNPDZCRAYG9M.SEARCH&ppt=sp&ppn=sp&ssid=xblv0yrxw00000001640184627334&qH=fec542b2adcc0ff4',
    dragonf:'https://www.flipkart.com/campus-dragon-running-shoes-men/p/itm12e838528fcbf?pid=SHOFGJYK3HBNNYMP&lid=LSTSHOFGJYK3HBNNYMPMHZL9S&marketplace=FLIPKART&q=champs+dragon&store=osp%2Fcil%2F1cu&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=ee097247-6035-4895-b3a8-d4fbc2f679ee.SHOFGJYK3HBNNYMP.SEARCH&ppt=sp&ppn=sp&ssid=ts1gkb50hs0000001640184673604&qH=2c3bbf9bc07392ef',
    focusf:'https://www.flipkart.com/champs-focus-on-running-shoes-men/p/itm9e101610beac6?pid=SHOG2AHBKGX7WXZA&lid=LSTSHOG2AHBKGX7WXZA053VOP&marketplace=FLIPKART&q=champs+focus&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=55f5d8d6-8fd8-4a0c-b18b-d79b38cc059f.SHOG2AHBKGX7WXZA.SEARCH&ppt=sp&ppn=sp&ssid=qjtai1904g0000001640184720180&qH=2456411bec4dc1f2',
    gloryf:'https://www.flipkart.com/champs-glory-walking-shoes-women/p/itmd9639befbf9f0?pid=SHOFXEX53QHVE4EB&lid=LSTSHOFXEX53QHVE4EBIS41XR&marketplace=FLIPKART&q=champs+glory&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=d84b44f8-21c0-409a-989f-16773bc023c5.SHOFXEX53QHVE4EB.SEARCH&ppt=sp&ppn=sp&ssid=7xxesb7ni80000001640184759248&qH=7c5dd020c3c89a3b',
    harris1f:'https://www.flipkart.com/champs-harris-on-sneakers-women/p/itm4df51ee437f7d?pid=SHOG6BRDYNN7RDHC&lid=LSTSHOG6BRDYNN7RDHCRKIAUU&marketplace=FLIPKART&q=champs+harris&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=7c6b168a-ce3a-45d4-932b-1e2b14062889.SHOG6BRDYNN7RDHC.SEARCH&ppt=sp&ppn=sp&ssid=qr2yeccfr40000001640184802858&qH=bfd3ac9ae774084b',
    northf:'https://www.flipkart.com/champs-north-running-shoes-men/p/itm58aca7b2ec115?pid=SHOFWHJKUFSYA6GF&lid=LSTSHOFWHJKUFSYA6GFH3KGBE&marketplace=FLIPKART&q=champs+north&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=8a37f023-c40e-4105-9e51-17508b043809.SHOFWHJKUFSYA6GF.SEARCH&ppt=sp&ppn=sp&ssid=wb0sdu062o0000001640184848126&qH=29002a452aeab27b',
    oscarf:'https://www.flipkart.com/champs-running-shoes-men/p/itm7dc360317cc77?pid=SHOG6E9RTHCGQRYD&lid=LSTSHOG6E9RTHCGQRYDJKEVIE&marketplace=FLIPKART&q=champs+oscar&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=0e6cacda-0bbf-4136-83a0-11a618e37e69.SHOG6E9RTHCGQRYD.SEARCH&ppt=sp&ppn=sp&ssid=6xa5bgzk280000001640184887211&qH=a40da1e7c137f881',
    pantherf:'https://www.flipkart.com/champs-panther-on-running-shoes-men/p/itme23c432a3f050?pid=SHOFZMNJYQAQQ3XP&lid=LSTSHOFZMNJYQAQQ3XPJPICDJ&marketplace=FLIPKART&q=champs+panther&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=dcf58e4a-3f5c-4be1-8b8b-275d1e042014.SHOFZMNJYQAQQ3XP.SEARCH&ppt=sp&ppn=sp&ssid=59bpin1vo00000001640184936979&qH=a8d93619cc681155',
    solof:'https://www.flipkart.com/champs-solo-on-running-shoes-men/p/itma54b28f777882?pid=SHOG5KZ7H2AE9NDM&lid=LSTSHOG5KZ7H2AE9NDML3VVDJ&marketplace=FLIPKART&q=champs+solo&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=3ebadeb2-27fd-45e4-9959-d26f4ed3e00f.SHOG5KZ7H2AE9NDM.SEARCH&ppt=sp&ppn=sp&ssid=mpau8e0ikg0000001640185043902&qH=2bdc6253ef2f8a73',
    bidenf:'https://www.flipkart.com/champs-biden-on-running-shoes-men/p/itm33adbbb0b5a90?pid=SHOFZHX582JVG4SE&lid=LSTSHOFZHX582JVG4SE1CDTVB&marketplace=FLIPKART&q=champs+biden+shoe&store=osp%2Fcil%2F1cu&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=3f4e63e4-669b-49c1-bd66-5d0d958a6df2.SHOFZHX582JVG4SE.SEARCH&ppt=sp&ppn=sp&ssid=tro91qbbkg0000001640361524668&qH=9f16cae046591c97',
    biden2f:'https://www.flipkart.com/champs-biden-2-on-running-shoes-men/p/itm6a38528ac5891?pid=SHOG6EBNHAUYTWWM&lid=LSTSHOG6EBNHAUYTWWMTAK4MR&marketplace=FLIPKART&q=champs+biden+2+shoe&store=osp%2Fcil&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=0628ff96-ffb2-444e-af38-35cf7e3ac842.SHOG6EBNHAUYTWWM.SEARCH&ppt=sp&ppn=sp&ssid=sf3ltrgoo00000001640361607045&qH=3e233257a7eda07c',
    biden3f:'https://www.flipkart.com/champs-biden-3-on-sneakers-men/p/itm7e012ad07ae0b?pid=SHOG5KZ7JKW47NGZ&lid=LSTSHOG5KZ7JKW47NGZFBUWVF&marketplace=FLIPKART&q=champs+biden+3+shoe&store=osp%2Fcil&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=6b9966cc-01e5-4639-a99f-49208bdb0d9c.SHOG5KZ7JKW47NGZ.SEARCH&ppt=sp&ppn=sp&ssid=bqxopa5e5c0000001640361634225&qH=ae1115d4f38e1e81',
    biden4f:'https://www.flipkart.com/champs-biden-4-on-running-shoes-men/p/itme8dc91c87409c?pid=SHOG8RAQTRHTRWXS&lid=LSTSHOG8RAQTRHTRWXSLVCGZ3&marketplace=FLIPKART&q=champs+biden+4+shoe&store=osp%2Fcil%2F1cu&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=a3119b05-73b6-46f0-bbbb-efbfba216cfa.SHOG8RAQTRHTRWXS.SEARCH&ppt=sp&ppn=sp&ssid=ro0w4h9h800000001640361658007&qH=88a90e4e78745072',
    biden5f:'https://www.flipkart.com/champs-biden-5-on-walking-shoes-men/p/itmaccf35145bfe3?pid=SHOG8RAQTSTBJNFM&lid=LSTSHOG8RAQTSTBJNFMMQYHVW&marketplace=FLIPKART&q=champs+biden+5+shoe&store=osp%2Fcil%2F1cu&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=f2baf8b8-b01c-47d9-bd3d-59eb1ad0775f.SHOG8RAQTSTBJNFM.SEARCH&ppt=sp&ppn=sp&ssid=zul7gvm05s0000001640361686261&qH=b19f7cd78b2306e0',
    biden6f:'https://www.flipkart.com/champs-biden-6-on-walking-shoes-men/p/itm9062c69f6e754?pid=SHOG8RAQSKSSWUST&lid=LSTSHOG8RAQSKSSWUSTFQTUIF&marketplace=FLIPKART&q=champs+biden+6+shoe&store=osp%2Fcil%2F1cu&srno=s_1_17&otracker=search&otracker1=search&fm=SEARCH&iid=6552fc2f-1d6a-4774-8b7a-7f96969fda5b.SHOG8RAQSKSSWUST.SEARCH&ppt=sp&ppn=sp&ssid=ugbxonovv40000001640361715261&qH=7f97affbf0eb1653',
    cyberf:'https://www.flipkart.com/champs-cyber-on-running-shoes-men/p/itm243b431ecc83a?pid=SHOG36FHDPCMCYNP&lid=LSTSHOG36FHDPCMCYNPBF7HXO&marketplace=FLIPKART&q=champs+cyber+shoe&store=osp%2Fcil&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=3dfb8408-45fb-47c7-b1f2-a637618c3f4e.SHOG36FHDPCMCYNP.SEARCH&ppt=sp&ppn=sp&ssid=inh1yuokhc0000001640361795896&qH=2c52cf63e249a33d',
    forcef:'https://www.flipkart.com/champs-force-on-running-shoes-men/p/itmb1fe73ab9d878?pid=SHOGYWZCYMQKE9UH&lid=LSTSHOGYWZCYMQKE9UH1GUVBA&marketplace=FLIPKART&q=champs+force+shoe&store=osp%2Fcil%2F1cu&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=079ea8c9-a5de-4f1f-a9ef-788ef2246323.SHOGYWZCYMQKE9UH.SEARCH&ppt=sp&ppn=sp&ssid=z9219s27ww0000001640361971304&qH=c0fff15ad9572e78',
    gamaf:'https://www.flipkart.com/champs-gama-on-running-shoes-men/p/itm8d4ceb3e2b4df?pid=SHOFV8YJWJWAWZK7&lid=LSTSHOFV8YJWJWAWZK7CFLYG4&marketplace=FLIPKART&q=champs+gama+shoe&store=osp%2Fcil%2F1cu&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=9dbb4fbb-864e-4177-80a5-fc764c44539c.SHOFV8YJWJWAWZK7.SEARCH&ppt=sp&ppn=sp&ssid=9x63c18rsw0000001640361951188&qH=ac3e8e50e0e17e79',
    harris2f:'https://www.flipkart.com/champs-harris-2-on-casuals-men/p/itm2e8059c5a6ab5?pid=SHOG8YG7HJHRDSFZ&lid=LSTSHOG8YG7HJHRDSFZN99KEU&marketplace=FLIPKART&q=champs+harris+2+shoe&store=osp%2Fcil&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=f7a93326-9ac6-4f14-9a7a-e0c0cbc143ca.SHOG8YG7HJHRDSFZ.SEARCH&ppt=sp&ppn=sp&ssid=3699qg7sn40000001640362210370&qH=a2733ba827f6583e',
    harris7f:'https://www.flipkart.com/champs-harris-7-on-walking-shoes-men/p/itmb31c3b2df3575?pid=SHOG8RBBG5HJZN6T&lid=LSTSHOG8RBBG5HJZN6TLGX5MM&marketplace=FLIPKART&q=champs+harris+4+shoe&store=osp%2Fcil&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=836084c8-2dd1-4545-94a8-301c6412e495.SHOG8RBBG5HJZN6T.SEARCH&ppt=sp&ppn=sp&ssid=0y2bm4s2hs0000001640362473803&qH=12b7727d4f875983',
    parisf:'https://www.flipkart.com/champs-paris-on-training-gym-shoes-men/p/itm4bbb772e95323?pid=SHOG6EBCMEYNCVZV&lid=LSTSHOG6EBCMEYNCVZVMEPNS2&marketplace=FLIPKART&q=champs+paris+shoe&store=osp%2Fcil%2F1cu&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=2e2df8ee-a252-4485-a285-16ebcd21e86f.SHOG6EBCMEYNCVZV.SEARCH&ppt=sp&ppn=sp&ssid=xzjn6irpg00000001640362610618&qH=88ac4ed7c6f11f37',
    gama2f:'https://www.flipkart.com/champs-gama-2-on-running-shoes-men/p/itm081b5876bff5e?pid=SHOFZHX2GNEAKZFS&lid=LSTSHOFZHX2GNEAKZFSVLM36I&marketplace=FLIPKART&q=champs+gama+2&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=5ae26829-8926-4622-897a-2ed99d6cb862.SHOFZHX2GNEAKZFS.SEARCH&ppt=sp&ppn=sp&ssid=en6tgik0dc0000001640410589663&qH=8bbee0e6db68ab2a',
    hoppf:'https://www.flipkart.com/champs-hopp-on-running-shoes-men/p/itmf5e5879877275?pid=SHOFV8SXYTMBABJZ&lid=LSTSHOFV8SXYTMBABJZ02LDRO&marketplace=FLIPKART&q=champs+hopp&store=osp&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=eb8175b8-3d38-49f7-b55e-9c69c1de579d.SHOFV8SXYTMBABJZ.SEARCH&ppt=sp&ppn=sp&ssid=gz9ss9m5ls0000001640410722927&qH=15d1f16bcdd3a4d7',
    primef:'https://www.flipkart.com/champs-prime-on-running-shoes-men/p/itm278e67ab1f998?pid=SHOG6EY7HFRMVJCF&lid=LSTSHOG6EY7HFRMVJCFZOE9IE&marketplace=FLIPKART&q=champs+prime&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=28ec5969-06a2-419f-9254-80e2e83f31b8.SHOG6EY7HFRMVJCF.SEARCH&ppt=sp&ppn=sp&ssid=63wgwbsjsw0000001640411027709&qH=9f74d9794c1225e0',
    scopef:'https://www.flipkart.com/champs-scope-on-running-shoes-men/p/itmc5a0017edc837?pid=SHOFZMNGZ6K4YG7T&lid=LSTSHOFZMNGZ6K4YG7TL46SHJ&marketplace=FLIPKART&q=champs+scope&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=ae4546dd-2a79-4a73-9e49-1c2f75a70afd.SHOFZMNGZ6K4YG7T.SEARCH&ppt=sp&ppn=sp&ssid=y7r9whwi680000001640411662559&qH=5a29ab2fcd0e6672',
    solly1f:'https://www.flipkart.com/champs-solly1peach-outdoors-women/p/itm9a8fbd3ba7781?pid=SHOFXNCHDASZG8E7&lid=LSTSHOFXNCHDASZG8E7EM7MA5&marketplace=FLIPKART&q=champs+solly1&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=ae0ec734-c92a-4087-8f55-a9de13676606.SHOFXNCHDASZG8E7.SEARCH&ppt=sp&ppn=sp&ssid=scnsjcd9eo0000001640411740845&qH=6fbd7d90e7c22633',
    solly2f:'https://www.flipkart.com/champs-solly-2-on-sneakers-women/p/itm38c54ae91144a?pid=SHOFXEH4DGG6TYFR&lid=LSTSHOFXEH4DGG6TYFR6V9DUL&marketplace=FLIPKART&q=champs+solly2&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=d2e8b78f-e6e3-4f92-8710-1db1d2823c19.SHOFXEH4DGG6TYFR.SEARCH&ppt=sp&ppn=sp&ssid=qf5zfjqg4g0000001640411896689&qH=16c4c1bba52873ac',
    stonexf:'https://www.flipkart.com/champs-stonex-on-running-shoes-men/p/itmde00246940012?pid=SHOG6EB6ZUWSXT3Z&lid=LSTSHOG6EB6ZUWSXT3ZVDIO2U&marketplace=FLIPKART&q=champs+stonex&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=dbba7618-a0ff-4e7f-be2c-26d177ecf616.SHOG6EB6ZUWSXT3Z.SEARCH&ppt=sp&ppn=sp&ssid=dow7hn4i9c0000001640411971705&qH=f7d97ec7f9cd7b90',
    unikf:'https://www.flipkart.com/champs-unik-on-running-shoes-men/p/itmab7c56009e937?pid=SHOG2FEGGTFAVPAH&lid=LSTSHOG2FEGGTFAVPAHUXIWZ9&marketplace=FLIPKART&q=champs+unik&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=da0fdad7-bcf1-40cc-92cd-c068e34f36d0.SHOG2FEGGTFAVPAH.SEARCH&ppt=sp&ppn=sp&ssid=1a9jjvgkls0000001640412057691&qH=45749abb3bdd02ac',
    wantedf:'https://www.flipkart.com/champs-wanted-on-running-shoes-men/p/itmf176cec63ecd6?pid=SHOG8RARGYW2M6VU&lid=LSTSHOG8RARGYW2M6VUV6ZNKA&marketplace=FLIPKART&q=champs+wanted&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=3cb3531d-2efd-4c5e-9efb-2cf23754657c.SHOG8RARGYW2M6VU.SEARCH&ppt=sp&ppn=sp&ssid=q1fda7y5ds0000001640412272338&qH=b90380dc86482c18',

    //MYNTRA
    agendam:'https://www.myntra.com/sports-shoes/champs/champs-men-navy-blue-mesh-running-shoes/14316162/buy',
    altrozm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-running-sports-shoes/15402032/buy',
    armourm:'https://www.myntra.com/sports-shoes/champs/champs-men-navy-blue-mesh-running-shoes/14224432/buy',
    balenom:'https://www.myntra.com/sports-shoes/champs/champs-men-blue-running-shoes/14018280/buy',
    basicm:'https://www.myntra.com/casual-shoes/champs/champs-men-black-woven-design-slip-on-sneakers/14338930/buy',
    belgiumm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-mesh-running-shoes/14224464/buy',
    bravem:'https://www.myntra.com/sports-shoes/champs/champs-men-black-mesh-long-distance-running-shoes/14323768/buy',
    brazilm:'https://www.myntra.com/sports-shoes/champs/champs-men-gold-toned-mesh-running-shoes/14150870/buy',
    crystalm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-mesh-long-distance-running-shoes/14150864/buy',
    divam:'https://www.myntra.com/casual-shoes/champs/champs-women-maroon-woven-design-slip-on-sneakers/14198654/buy',
    dragonm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-running-shoes/14316202/buy',
    focusm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-synthetic-running-shoes/14172194/buy',
    glorym:'https://www.myntra.com/sports-shoes/champs/champs-women-peach-coloured-running-shoes/14313308/buy',
    harris1m:'https://www.myntra.com/casual-shoes/champs/champs-women-pink-woven-design-sneakers/15138036/buy',
    northm:'https://www.myntra.com/sports-shoes/champs/champs-men-grey-running-shoes/14316148/buy',
    pantherm:'https://www.myntra.com/sports-shoes/champs/champs-men-blue-mesh-running-shoes/14316154/buy',
    oscarm:'https://www.myntra.com/sports-shoes/champs/champs-men-white-running-non-marking-sports-shoes/15402040/buy',
    solom:'https://www.myntra.com/sports-shoes/champs/champs-men-blue-running-non-marking-shoes/15057788/buy',
    gama1m:'https://www.myntra.com/sports-shoes/champs/champs-men-black-mesh-running-shoes/14316172/buy',
    harris2m:'https://www.myntra.com/casual-shoes/champs/champs-women-pink-woven-design-slip-on-sneakers/15339520/buy',
    harris3m:'https://www.myntra.com/casual-shoes/champs/champs-women-pink-woven-design-sneakers-/14198662/buy',
    gama2m:'https://www.myntra.com/sports-shoes/champs/champs-men-black-running-shoes/14316168/buy',
    primem:'https://www.myntra.com/sports-shoes/champs/champs-men-black-mesh-running-non-marking-shoes/15402044/buy',
    parism:'https://www.myntra.com/sports-shoes/champs/champs-men-black--red-paris-on-gyrd-mesh-regular-running-shoes/15402034/buy',
    recallm:'https://www.myntra.com/sports-shoes/champs/champs-men-grey-mesh-running-shoes/14224446/buy',
    stonexm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-synthetic-running-shoes/14172190/buy',
    scopem:'https://www.myntra.com/sports-shoes/champs/champs-men-black-mesh-running-shoes/14172182/buy',
    unikm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-mesh-running-shoes/14224442/buy',
}
var url = undefined
function clicked(e) {
    url = option[e]
}
function gotoUrl() {
    window.location.href = url
}
