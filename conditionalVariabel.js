 //conditional variabel pertama
 const IPK = 3.25;
 const HasilBelajar = IPK >= 3.00 ? 'LULUS' : 'TIDAK LULUS';
 console.log(HasilBelajar);



 //conditional variabel pertama
 const UN = 70;
 const kondisiAnd = UN >= 80 && 'LULUS';
 const kondisiOR = UN >= 80 || 'TIDAK LULUS';
 console.log(kondisiAnd);
 console.log(kondisiOR);



 //Filter dan Map 
 const makananPokok = [
 	{
 		nama : 'beras',
 		harga : 12000
 	},
 	{
 		nama : 'Minyak goreng',
 		harga : 15000
 	},
 	{
 		nama : 'Kentang',
 		harga : 25000
 	},
 	{
 		nama : 'Cabai',
 		harga : 2000
 	},
 	{
 		nama : 'Daging ayam',
 		harga : 70000
 	},
 	{
 		nama : 'Daging sapi',
 		harga : 120000
 	},
 	{
 		nama : 'Telur',
 		harga : 28000
 	},
 	{
 		nama : 'Ikan',
 		harga : 50000
 	}
 ];
 const namaMakanan = makananPokok.map((x)=>x.nama);
 console.log(namaMakanan);

 const hargaTermurah = makananPokok.filter((y)=>y.harga<20000);
 console.log(hargaTermurah);

