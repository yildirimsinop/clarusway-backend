-- Bu artık bir yorum satırıdır. SingleLine.

/*
	MultiLine
	Comment
*/

-- SELECT 1 AS one -- Tek block işlemler için noktalı-virgül zorunlu değildir.

-- SELECT 1 AS one; -- Bundan sonrası yorumdur. SELECT 2 AS one;

-- SELECT 1 AS One, /* Araya yorum ekleyebilirim. */ 2 AS Two;

-- NOT Case-Sensitive:
-- select 1 AS one; -- Piyasa standardına uygun değildir.
-- SELECT 2 AS TWO;

-- * Piyasa Standartları:
-- * * SQL Temel komutları BÜYÜK harfle yazılır. SELECT * FROM Album WHERE AlbumID=1;
-- * * String verilerde tek-çift tırnak kullanabilirsiniz. Standart olan tek tırnaktır.  SELECT 'string' AS yazi;
-- * * Her bir temel komut yeni bir satıra yazılır:
/*
SELECT	* 
FROM	Album 
WHERE	AlbumID=1;
*/

--- --- --- SQL --- --- ---

-- * SELECT - Seç getir.
-- * FROM - Hangi tablodan?
-- SELECT * FROM Album; -- * = Tüm sutunlar.
-- SELECT AlbumId, Title FROM Album; -- İstediğim sutunları getir. -- Tavsiye edilen yöntem ayrı-ayrı yazmaktır.

-- * AS -- Tablo veya Sutunları geçici adlandırmak için kullanılır. -- Lakap Takma
-- SELECT 'data' AS baslik; -- Data gönder.
-- SELECT 1+2  AS sonuc; -- Matematiksel ifade yazdır.
-- SELECT AlbumId AS numara, Title AS baslik FROM Album; -- Sutun isimlendirme
-- SELECT AlbumId+3 AS numara, Title AS baslik FROM Album;
-- SELECT Album.AlbumId, Album.Title FROM Album;
-- SELECT a.AlbumId, a.Title FROM Album AS a; -- Tablo isimlendirme
-- SELECT a.AlbumId AS Numara, a.Title AS Baslik FROM Album AS a;
-- SELECT a.AlbumId Numara, a.Title Baslik FROM Album a; -- AS kullanmadan da isimlendirme yapabiliriz.

-- * DISTINCT - Tekrar edilen kayıtarın tekrar edilmesini engeller (tek kayıt olarak getirir)
-- SELECT DISTINCT City FROM Customer;
-- SELECT DISTINCT City, Country FROM Customer; -- Bütün sutunlardaki ortak olanları 1 kere getirir.

-- * WHERE - Filtreleme
-- SELECT * FROM Customer WHERE Country = 'USA' -- Eşit olanları getir.
-- SELECT * FROM Customer WHERE Country != 'USA' -- Eşit olMAanları getir.
-- SELECT * FROM Customer WHERE Country <> 'USA' -- Eşit olMAanları getir.
-- SELECT * FROM Customer WHERE CustomerId > 20 -- Büyük olanları getir.
-- SELECT * FROM Customer WHERE CustomerId >= 20 -- BüyükEşit olanları getir.
-- SELECT * FROM Customer WHERE CustomerId < 20 -- Küçük olanları getir.
-- SELECT * FROM Customer WHERE CustomerId <= 20 -- KüçükEşit olanları getir.
-- SELECT * FROM Customer WHERE CustomerId BETWEEN 10 AND 20 -- 10 ile 20 arasında olanları getir. (her ikiside dahil)

-- * WHERE - AND/OR/NOT
-- * SELECT * FROM table WHERE True OR NOT True
-- SELECT * FROM Customer WHERE NOT Country = 'USA'
-- SELECT * FROM Customer WHERE Country = 'USA' AND Company NOT NULL
-- SELECT * FROM Customer WHERE Country = 'USA' OR Country = 'Brazil' OR Country='Denmark';
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country='Denmark') AND CustomerId > 25;
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country='Denmark') AND (CustomerId BETWEEN 25 AND 27)

-- * WHERE - IN / NOT IN
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil', 'Denmark');
-- SELECT * FROM Customer WHERE Country NOT IN ('USA', 'Brazil', 'Denmark');
-- SELECT * FROM Customer WHERE CustomerID IN (2,3,4,10,11);

-- * WHERE - LIKE ( _ = SingleChar, % = JokerChar)
-- SELECT * FROM Customer WHERE Country LIKE 'USA'; -- "USA" olanlar.
-- SELECT * FROM Customer WHERE Address LIKE '627 Broadway'; -- "627 Broadway" olanlar.
-- SELECT * FROM Customer WHERE Address LIKE '1498%';  -- "1498" ile başlayan kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '%langer';  -- "langer" ile biten kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '%rue%';  -- içinde "rue" geçen kayıtlar.
-- SELECT * FROM Customer WHERE Phone LIKE '_55 %'; -- 2. ve 3. karakteri 55 olan kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '_a_%'; -- 2 karakteri "a" olan ve en az 3 karakter olan.
-- SELECT * FROM Customer WHERE Phone LIKE '+__ 030%'; -- Ülke kodu bilinmeyen 030 ile başlaya telefonlar.
-- SELECT * FROM Customer WHERE Phone LIKE '+__ 030%' AND FirstName = 'Niklas'; -- Niklas isimli 030 ile başlayan numaralı kayıtlar.

-- * ORDER BY - Sıralama
-- * ASC - A-Z Sıralama
-- * DESC - Z-A Sıralama
-- SELECT * FROM Customer ORDER BY Country ASC; -- Normal Sıralama
-- SELECT * FROM Customer ORDER BY Country; -- Default: ASC
-- SELECT * FROM Customer ORDER BY Country DESC; -- Ters Sıralama
-- SELECT * FROM Customer ORDER BY Country ASC, City ASC, LastName ASC; -- Sırasıyla ülke - şehir ve soyisim sırala.
-- SELECT * FROM Customer ORDER BY Country, City, LastName; -- Sırasıyla ülke - şehir ve soyisim sırala.
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil') AND CustomerId > 12 AND Company NOT NULL ORDER BY Company ASC
/* 
-- Piyasada standartı her satıra ayrı ayrı yazmaktır:
SELECT * 
FROM Customer 
WHERE Country IN ('USA', 'Brazil') 
	AND CustomerId > 12
	AND Company NOT NULL 
ORDER BY Company ASC 
*/

-- * LIMIT - Belli sayıda kayıt getir.
-- SELECT * FROM Customer LIMIT 0, 10;  -- LIMIT kaçıncı kayıttan itibaren, kaç ADET kayıt.
-- SELECT * FROM Customer LIMIT 5 -- Başlangıç default: 0
-- SELECT * FROM Customer LIMIT 10, 5;  -- 10. kayıttan sonraki (yani 11. kayıttan itibaren) 5 adet kaydı getir.
-- SELECT * FROM Customer ORDER BY LastName ASC, FirstName DESC LIMIT 0, 5; -- Sıralamaya göre ilk 5 kayıt.
-- SELECT * FROM Customer ORDER BY LastName ASC, FirstName DESC LIMIT 5, 5; -- Sıralamaya göre ikinci 5 kayıt.

-- * SUBQUERY (SELECT IN SELECT) (Nested Query)
-- SELECT * FROM Album WHERE ArtistId = (SELECT ArtistId FROM Artist WHERE Name = 'Led Zeppeli'); -- Sanatçı ID'sini SubSelect'den aldık.
-- SELECT AlbumId, Title, (SELECT Name FROM Artist WHERE ArtistId = a.ArtistId) AS Artist FROM Album AS a;
/*
-- SubSELECT sorgusunu tablo gibi kullanmak:
SELECT FirstName, LastName
FROM (
	SELECT * FROM Customer WHERE Country = 'USA' AND CustomerId > 22
) WHERE FirstName LIKE '%a%'
*/

-- -- -- -- -- -- -- -- JOINS -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- Birden fazla tablodaki kayıtları tek bir tabloda getirmek için kullanıyor.

-- * INNER JOIN -- Yalnızca kesişen kayıtları getirir.
-- * (Alternatif Yazım: JOIN) Default JOIN yöntemi INNER JOIN'dir. (Piyasa kullanımı: INNER JOIN)
/*
SELECT *
FROM Artist AS art
JOIN Album AS alb ON alb.ArtistId=art.ArtistId -- JOIN == INNER JOIN
ORDER BY ArtistId ASC, AlbumId ASC
*/
/*
SELECT c.FirstName, c.LastName, c.Country, i.InvoiceId, i.InvoiceDate, i.Total AS InvoiceTotal
FROM Customer AS c
INNER JOIN Invoice AS i ON i.CustomerId = c.CustomerId
ORDER BY c.CustomerId
*/
/*
SELECT t.Name Sarki, a.Title Album, m.Name Dosya, g.Name Tur
FROM Track t
INNER JOIN Album a ON a.AlbumId=t.AlbumId
INNER JOIN MediaType m ON t.MediaTypeId=m.MediaTypeId
INNER JOIN Genre g ON g.GenreID=t.GenreId
*/

-- * LEFT JOIN -- Üst (FROM) tablodaki BÜTÜN kayıtlar ve JOIN tablodaki KESİŞEN kayıtları getir.
/*
SELECT *
FROM Artist AS art
LEFT JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/

-- * RIGHT JOIN -- Üst (FROM) tablodaki KESİŞEN kayıtlar ve JOIN tablodaki BÜTÜN kayıtları getir.
/*
SELECT *
FROM Artist AS art
RIGHT JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/

-- * FULL OUTER JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, Eşleşenleri yanyana göster.
/*
SELECT *
FROM Artist AS art
FULL OUTER JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/

-- * CROSS JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, İlişki gözetme.
/*
SELECT *
FROM Artist AS art
CROSS JOIN Album AS alb
ORDER BY ArtistId ASC, AlbumId ASC
*/

/*
-- Genel/Kısa Kullanım:
SELECT *
FROM Artist AS art, Album AS alb
ORDER BY ArtistId ASC, AlbumId ASC
*/

-- * JOIN ÖRNEKLER
/*
-- Hangi sanatçı hangi albümleri çıkarmıştır. Bir albüme sahip olmayan sanatçıları gösterme. Sadece albüm sahibi olan sanatçıları göster.
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
INNER JOIN Album AS t2 ON t1.ArtistId=t2.ArtistId
-- WHERE t1.Name = 'Led Zeppeli'
ORDER BY t1.ArtistId
/*
-- Bütün sanatçıları göster. Hangi sanatçı hangi albüme sahip onu da göster. Ama albüm sahibi olmayan kayıtlara NULL yaz.
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
LEFT JOIN Album AS t2 ON t2.ArtistId=t1.ArtistId
ORDER BY t1.ArtistId
*/

-- -- -- -- -- -- -- --  FUNCTIONS -- -- -- -- -- -- -- --

-- * COUNT -- Kayıt Sayısı
-- SELECT COUNT(*) AS kayitSayisi FROM Customer; -- (*) kullanmak efektif değil. 
-- SELECT COUNT(CustomerId) AS kayitSayisi FROM Customer; -- Herhangi bir sutun ismi kullanmalıyız (PRIMARY)
-- SELECT COUNT(CustomerId) AS kayitSayisi FROM Customer WHERE Country IN ('USA', 'Brazil', 'Denmark');

-- * SUM -- Toplam
-- SELECT SUM(Total) AS toplam, BillingCountry FROM Invoice; -- Toplam fatura tutarı
-- SELECT SUM(Total) AS toplam FROM Invoice WHERE BillingCountry='USA'; -- Amerikaya kesilen fatura toplamı.
-- SELECT COUNT(InvoiceId) AS adet, SUM(Total) AS toplam FROM Invoice; -- Toplam fatura tutarı

-- * AVG -- Ortalama
-- SELECT AVG(Total) AS ortalama FROM Invoice;

-- * ROUND -- Yuvarlama
-- SELECT ROUND(AVG(Total)) AS ortalama FROM Invoice;
-- SELECT ROUND(AVG(Total), 2) AS ortalama FROM Invoice;

-- * MIN -- En küçük değer -- String de destekler
-- SELECT MIN(Total) AS minTutar FROM Invoice;
-- SELECT MIN(FirstName) FROM Customer;

-- * MAX -- En büyük değer -- String de destekler
-- SELECT MAX(Total) AS maxTutar FROM Invoice;
-- SELECT MAX(FirstName) FROM Customer;

-- * LENGTH -- Karakter Sayısı (Kayıt sayısı tek satıra düşürmez)
-- SELECT LENGTH(BillingAddress) AS karakterSayisi FROM Invoice;
-- SELECT LENGTH(Total) AS karakterSayisi FROM Invoice; -- Number veri karakter sayısı

-- -- -- -- GROUP BY -- -- -- -- 

-- * GROUP BY -- İşlemleri gruplayarak yap.
-- SELECT COUNT(*) AS kayitSayisi, Country FROM Customer GROUP BY Country;
-- SELECT BillingCountry, COUNT(InvoiceId) AS faturaSayisi FROM Invoice GROUP BY BillingCountry;  -- Hangi ülkeye kaç adet fatura kesildi.
-- SELECT BillingCountry, COUNT(InvoiceId) AS faturaSayisi, SUM(Total) AS toplam FROM Invoice GROUP BY BillingCountry; -- Ülkeye göre toplam adet/tutarları ver.
-- SELECT BillingCountry, AVG(Total) AS ortalama FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre ortalama fatura tutarı.
-- SELECT BillingCountry, ROUND(AVG(Total), 2) AS ortalama FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre ortalama fatura tutarı. -- yuvarlanmış
-- SELECT BillingCountry, MIN(Total) AS minimum FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre minimum fatura tutarı.
-- SELECT BillingCountry, MIN(Total) AS minimum, MAX(Total) AS maximum FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre min/max fatura tutarı.
/*
SELECT BillingCountry, 
	COUNT(InvoiceId) AS faturaSayisi, 
	SUM(Total) AS toplam, 
	MIN(Total) AS minimum, 
	MAX(Total) AS maximum,
	ROUND(AVG(Total), 2) AS ortalama
FROM Invoice
GROUP BY BillingCountry;
*/

/* INSERT & UPDATE & DELETE */

/*
-- INSERT -- Kayıt Ekleme
INSERT INTO Artist (ArtistId, Name)
VALUES (276, 'Qadir Adamson');
*/
/*
-- INSERT -- Çoklu Kayıt Ekleme
INSERT INTO Artist (ArtistId, Name)
VALUES
	(277, 'Gümüş G'),
	(278, 'Mehmet T'),
	(279, 'Sinan Hoca'); -- En sonda noktalı-virgül.
*/

/*
-- UPDATE -- Kayıt Güncelleme
UPDATE Artist SET ( Name='Abdullah A.' ) WHERE ArtistId = 276;
*/

/*
-- DELETE -- Kayıt Silme
DELETE FROM Artist WHERE ArtistId=276;
*/