// Your library of movies, games and anime.
// Optional extra fields for a title: director, cast (main star), studio, genre, rating. Each one has a title, a year and a poster.
// 1. Put the poster image in posters/movies/, posters/games/ or posters/anime/
//    (about 400 x 600 px, JPG or PNG, under 200 KB is best).
// 2. Add a line for it below.
// When someone reviews a title that is in this list, its poster is shown with
// the review automatically, and the title appears in the review form's list.
const CATALOG = {
    movies: [
        { title: "Raja Harishchandra", lang: "Hindi", year: 1913, poster: "posters/movies/raja-harishchandra-1913.jpg" },
        { title: "Alam Ara", lang: "Hindi", year: 1931, poster: "posters/movies/alam-ara-1931.jpg" },
        { title: "Achhut Kanya", lang: "Hindi", year: 1936, poster: "posters/movies/achhut-kanya-1936.jpg" },
        { title: "Kismet", lang: "Hindi", year: 1943, poster: "posters/movies/kismet-1943.jpg" },
        { title: "Neecha Nagar", lang: "Hindi", year: 1946, poster: "posters/movies/neecha-nagar-1946.jpg" },
        { title: "Awaara", lang: "Hindi", year: 1951, poster: "posters/movies/awaara-1951.jpg" },
        { title: "Shree 420", lang: "Hindi", year: 1955, poster: "posters/movies/shree-420-1955.jpg" },
        { title: "Mother India", lang: "Hindi", year: 1957, poster: "posters/movies/mother-india-1957.jpg" },
        { title: "Pyaasa", lang: "Hindi", year: 1957, poster: "posters/movies/pyaasa-1957.jpg" },
        { title: "Madhumati", lang: "Hindi", year: 1958, poster: "posters/movies/madhumati-1958.jpg" },
        { title: "Kaagaz Ke Phool", lang: "Hindi", year: 1959, poster: "posters/movies/kaagaz-ke-phool-1959.jpg" },
        { title: "Mughal-e-Azam", lang: "Hindi", year: 1960, poster: "posters/movies/mughal-e-azam-1960.jpg" },
        { title: "Guide", lang: "Hindi", year: 1965, poster: "posters/movies/guide-1965.jpg" },
        { title: "Teesri Manzil", lang: "Hindi", year: 1966, poster: "posters/movies/teesri-manzil-1966.jpg" },
        { title: "Anand", lang: "Hindi", year: 1971, poster: "posters/movies/anand-1971.jpg" },
        { title: "Pakeezah", lang: "Hindi", year: 1972, poster: "posters/movies/pakeezah-1972.jpg" },
        { title: "Chupke Chupke", lang: "Hindi", year: 1975, poster: "posters/movies/chupke-chupke-1975.jpg" },
        { title: "Deewaar", lang: "Hindi", year: 1975, poster: "posters/movies/deewaar-1975.jpg" },
        { title: "Sholay", lang: "Hindi", year: 1975, poster: "posters/movies/sholay-1975.jpg" },
        { title: "Amar Akbar Anthony", lang: "Hindi", year: 1977, poster: "posters/movies/amar-akbar-anthony-1977.jpg" },
        { title: "Don", lang: "Hindi", year: 1978, poster: "posters/movies/don-1978.jpg" },
        { title: "Gol Maal", lang: "Hindi", year: 1979, poster: "posters/movies/gol-maal-1979.jpg" },
        { title: "Qurbani", lang: "Hindi", year: 1980, poster: "posters/movies/qurbani-1980.jpg" },
        { title: "Silsila", lang: "Hindi", year: 1981, poster: "posters/movies/silsila-1981.jpg" },
        { title: "Umrao Jaan", lang: "Hindi", year: 1981, poster: "posters/movies/umrao-jaan-1981.jpg" },
        { title: "Arth", lang: "Hindi", year: 1982, poster: "posters/movies/arth-1982.jpg" },
        { title: "Jaane Bhi Do Yaaro", lang: "Hindi", year: 1983, poster: "posters/movies/jaane-bhi-do-yaaro-1983.jpg" },
        { title: "Mr. India", lang: "Hindi", year: 1987, poster: "posters/movies/mr-india-1987.jpg" },
        { title: "Qayamat Se Qayamat Tak", lang: "Hindi", year: 1988, poster: "posters/movies/qayamat-se-qayamat-tak-1988.jpg" },
        { title: "Maine Pyar Kiya", lang: "Hindi", year: 1989, poster: "posters/movies/maine-pyar-kiya-1989.jpg" },
        { title: "Parinda", lang: "Hindi", year: 1989, poster: "posters/movies/parinda-1989.jpg" },
        { title: "Dil", lang: "Hindi", year: 1990, poster: "posters/movies/dil-1990.jpg" },
        { title: "Jo Jeeta Wohi Sikandar", lang: "Hindi", year: 1992, poster: "posters/movies/jo-jeeta-wohi-sikandar-1992.jpg" },
        { title: "Damini", lang: "Hindi", year: 1993, poster: "posters/movies/damini-1993.jpg" },
        { title: "Andaz Apna Apna", lang: "Hindi", year: 1994, poster: "posters/movies/andaz-apna-apna-1994.jpg" },
        { title: "Hum Aapke Hain Koun..!", lang: "Hindi", year: 1994, poster: "posters/movies/hum-aapke-hain-koun-1994.jpg" },
        { title: "Dilwale Dulhania Le Jayenge", lang: "Hindi", year: 1995, poster: "posters/movies/dilwale-dulhania-le-jayenge-1995.jpg" },
        { title: "Rangeela", lang: "Hindi", year: 1995, poster: "posters/movies/rangeela-1995.jpg" },
        { title: "Maachis", lang: "Hindi", year: 1996, poster: "posters/movies/maachis-1996.jpg" },
        { title: "Kuch Kuch Hota Hai", lang: "Hindi", year: 1998, poster: "posters/movies/kuch-kuch-hota-hai-1998.jpg" },
        { title: "Satya", lang: "Hindi", year: 1998, poster: "posters/movies/satya-1998.jpg" },
        { title: "Sarfarosh", lang: "Hindi", year: 1999, poster: "posters/movies/sarfarosh-1999.jpg" },
        { title: "Dil Chahta Hai", lang: "Hindi", year: 2001, poster: "posters/movies/dil-chahta-hai-2001.jpg" },
        { title: "Lagaan", lang: "Hindi", year: 2001, poster: "posters/movies/lagaan-2001.jpg" },
        { title: "Devdas", lang: "Hindi", year: 2002, poster: "posters/movies/devdas-2002.jpg" },
        { title: "Munna Bhai M.B.B.S.", lang: "Hindi", year: 2003, poster: "posters/movies/munna-bhai-m-b-b-s-2003.jpg" },
        { title: "Swades", lang: "Hindi", year: 2004, poster: "posters/movies/swades-2004.jpg" },
        { title: "Black", lang: "Hindi", year: 2005, poster: "posters/movies/black-2005.jpg" },
        { title: "Lage Raho Munna Bhai", lang: "Hindi", year: 2006, poster: "posters/movies/lage-raho-munna-bhai-2006.jpg" },
        { title: "Rang De Basanti", lang: "Hindi", year: 2006, poster: "posters/movies/rang-de-basanti-2006.jpg" },
        { title: "Jab We Met", lang: "Hindi", year: 2007, poster: "posters/movies/jab-we-met-2007.jpg" },
        { title: "Taare Zameen Par", lang: "Hindi", year: 2007, poster: "posters/movies/taare-zameen-par-2007.jpg" },
        { title: "3 Idiots", lang: "Hindi", year: 2009, poster: "posters/movies/3-idiots-2009.jpg" },
        { title: "Udaan", lang: "Hindi", year: 2010, poster: "posters/movies/udaan-2010.jpg" },
        { title: "Zindagi Na Milegi Dobara", lang: "Hindi", year: 2011, poster: "posters/movies/zindagi-na-milegi-dobara-2011.jpg" },
        { title: "Gangs of Wasseypur", lang: "Hindi", year: 2012, poster: "posters/movies/gangs-of-wasseypur-2012.jpg" },
        { title: "Kahaani", lang: "Hindi", year: 2012, poster: "posters/movies/kahaani-2012.jpg" },
        { title: "Bhaag Milkha Bhaag", lang: "Hindi", year: 2013, poster: "posters/movies/bhaag-milkha-bhaag-2013.jpg" },
        { title: "Queen", lang: "Hindi", year: 2013, poster: "posters/movies/queen-2013.jpg" },
        { title: "PK", lang: "Hindi", year: 2014, poster: "posters/movies/pk-2014.jpg" },
        { title: "Dangal", lang: "Hindi", year: 2016, poster: "posters/movies/dangal-2016.jpg" },
        { title: "Pink", lang: "Hindi", year: 2016, poster: "posters/movies/pink-2016.jpg" },
        { title: "Andhadhun", lang: "Hindi", year: 2018, poster: "posters/movies/andhadhun-2018.jpg" },
        { title: "Badhaai Ho", lang: "Hindi", year: 2018, poster: "posters/movies/badhaai-ho-2018.jpg" },
        { title: "Article 15", lang: "Hindi", year: 2019, poster: "posters/movies/article-15-2019.jpg" },
        { title: "Gully Boy", lang: "Hindi", year: 2019, poster: "posters/movies/gully-boy-2019.jpg" },
        { title: "Thappad", lang: "Hindi", year: 2020, poster: "posters/movies/thappad-2020.jpg" },
        { title: "Sardar Udham", lang: "Hindi", year: 2021, poster: "posters/movies/sardar-udham-2021.jpg" },
        { title: "Gangubai Kathiawadi", lang: "Hindi", year: 2022, poster: "posters/movies/gangubai-kathiawadi-2022.jpg" },
        { title: "The Kashmir Files", lang: "Hindi", year: 2022, poster: "posters/movies/the-kashmir-files-2022.jpg" },
        { title: "12th Fail", lang: "Hindi", year: 2023, poster: "posters/movies/12th-fail-2023.jpg" },
        { title: "Laapataa Ladies", lang: "Hindi", year: 2024, poster: "posters/movies/laapataa-ladies-2024.jpg" },
        { title: "Stree 2", lang: "Hindi", year: 2024, poster: "posters/movies/stree-2-2024.jpg" },
        { title: "Chhaava", lang: "Hindi", year: 2025, poster: "posters/movies/chhaava-2025.jpg" },
        { title: "Sitaare Zameen Par", lang: "Hindi", year: 2025, poster: "posters/movies/sitaare-zameen-par-2025.jpg" },
        { title: "Vigathakumaran", lang: "Malayalam", year: 1928, poster: "posters/movies/vigathakumaran-1928.jpg" },
        { title: "Balan", lang: "Malayalam", year: 1938, poster: "posters/movies/balan-1938.jpg" },
        { title: "Nirmala", lang: "Malayalam", year: 1948, poster: "posters/movies/nirmala-1948.jpg" },
        { title: "Jeevitha Nouka", lang: "Malayalam", year: 1951, poster: "posters/movies/jeevitha-nouka-1951.jpg" },
        { title: "Neelakuyil", lang: "Malayalam", year: 1954, poster: "posters/movies/neelakuyil-1954.jpg" },
        { title: "Chemmeen", lang: "Malayalam", year: 1965, poster: "posters/movies/chemmeen-1965.jpg" },
        { title: "Thulabharam", lang: "Malayalam", year: 1968, poster: "posters/movies/thulabharam-1968.jpg" },
        { title: "Olavum Theeravum", lang: "Malayalam", year: 1970, poster: "posters/movies/olavum-theeravum-1970.jpg" },
        { title: "Swayamvaram", lang: "Malayalam", year: 1972, poster: "posters/movies/swayamvaram-1972.jpg" },
        { title: "Nirmalyam", lang: "Malayalam", year: 1973, poster: "posters/movies/nirmalyam-1973.jpg" },
        { title: "Chattakari", lang: "Malayalam", year: 1974, poster: "posters/movies/chattakari-1974.jpg" },
        { title: "Uttarayanam", lang: "Malayalam", year: 1974, poster: "posters/movies/uttarayanam-1974.jpg" },
        { title: "Manjil Virinja Pookkal", lang: "Malayalam", year: 1980, poster: "posters/movies/manjil-virinja-pookkal-1980.jpg" },
        { title: "Elippathayam", lang: "Malayalam", year: 1981, poster: "posters/movies/elippathayam-1981.jpg" },
        { title: "Yavanika", lang: "Malayalam", year: 1982, poster: "posters/movies/yavanika-1982.jpg" },
        { title: "Kattathe Kilikkoodu", lang: "Malayalam", year: 1983, poster: "posters/movies/kattathe-kilikkoodu-1983.jpg" },
        { title: "Koodevide", lang: "Malayalam", year: 1983, poster: "posters/movies/koodevide-1983.jpg" },
        { title: "Sandhyakku Virinja Poovu", lang: "Malayalam", year: 1983, poster: "posters/movies/sandhyakku-virinja-poovu-1983.jpg" },
        { title: "My Dear Kuttichathan", lang: "Malayalam", year: 1984, poster: "posters/movies/my-dear-kuttichathan-1984.jpg" },
        { title: "Nokkethadhoorathu Kannum Nattu", lang: "Malayalam", year: 1984, poster: "posters/movies/nokkethadhoorathu-kannum-nattu-1984.jpg" },
        { title: "Panchavadi Palam", lang: "Malayalam", year: 1984, poster: "posters/movies/panchavadi-palam-1984.jpg" },
        { title: "Gandhinagar 2nd Street", lang: "Malayalam", year: 1986, poster: "posters/movies/gandhinagar-2nd-street-1986.jpg" },
        { title: "Namukku Parkkan Munthirithoppukal", lang: "Malayalam", year: 1986, poster: "posters/movies/namukku-parkkan-munthirithoppukal-1986.jpg" },
        { title: "Sanmanassullavarkku Samadhanam", lang: "Malayalam", year: 1986, poster: "posters/movies/sanmanassullavarkku-samadhanam-1986.jpg" },
        { title: "Thalavattam", lang: "Malayalam", year: 1986, poster: "posters/movies/thalavattam-1986.jpg" },
        { title: "Amrutham Gamaya", lang: "Malayalam", year: 1987, poster: "posters/movies/amrutham-gamaya-1987.jpg" },
        { title: "Irupatham Noottandu", lang: "Malayalam", year: 1987, poster: "posters/movies/irupatham-noottandu-1987.jpg" },
        { title: "Nadodikkattu", lang: "Malayalam", year: 1987, poster: "posters/movies/nadodikkattu-1987.jpg" },
        { title: "Thoovanathumbikal", lang: "Malayalam", year: 1987, poster: "posters/movies/thoovanathumbikal-1987.jpg" },
        { title: "Chithram", lang: "Malayalam", year: 1988, poster: "posters/movies/chithram-1988.jpg" },
        { title: "Kireedam", lang: "Malayalam", year: 1989, poster: "posters/movies/kireedam-1989.jpg" },
        { title: "Oru Vadakkan Veeragatha", lang: "Malayalam", year: 1989, poster: "posters/movies/oru-vadakkan-veeragatha-1989.jpg" },
        { title: "Peruvannapurathe Visheshangal", lang: "Malayalam", year: 1989, poster: "posters/movies/peruvannapurathe-visheshangal-1989.jpg" },
        { title: "His Highness Abdullah", lang: "Malayalam", year: 1990, poster: "posters/movies/his-highness-abdullah-1990.jpg" },
        { title: "In Harihar Nagar", lang: "Malayalam", year: 1990, poster: "posters/movies/in-harihar-nagar-1990.jpg" },
        { title: "Bharatham", lang: "Malayalam", year: 1991, poster: "posters/movies/bharatham-1991.jpg" },
        { title: "Godfather", lang: "Malayalam", year: 1991, poster: "posters/movies/godfather-1991.jpg" },
        { title: "Kilukkam", lang: "Malayalam", year: 1991, poster: "posters/movies/kilukkam-1991.jpg" },
        { title: "Devasuram", lang: "Malayalam", year: 1993, poster: "posters/movies/devasuram-1993.jpg" },
        { title: "Manichitrathazhu", lang: "Malayalam", year: 1993, poster: "posters/movies/manichitrathazhu-1993.jpg" },
        { title: "Thenmavin Kombath", lang: "Malayalam", year: 1994, poster: "posters/movies/thenmavin-kombath-1994.jpg" },
        { title: "Spadikam", lang: "Malayalam", year: 1995, poster: "posters/movies/spadikam-1995.jpg" },
        { title: "Thooval Kottaram", lang: "Malayalam", year: 1996, poster: "posters/movies/thooval-kottaram-1996.jpg" },
        { title: "Kalyanaraman", lang: "Malayalam", year: 2002, poster: "posters/movies/kalyanaraman-2002.jpg" },
        { title: "Nandanam", lang: "Malayalam", year: 2002, poster: "posters/movies/nandanam-2002.jpg" },
        { title: "Classmates", lang: "Malayalam", year: 2006, poster: "posters/movies/classmates-2006.jpg" },
        { title: "Notebook", lang: "Malayalam", year: 2006, poster: "posters/movies/notebook-2006.jpg" },
        { title: "Traffic", lang: "Malayalam", year: 2011, poster: "posters/movies/traffic-2011.jpg" },
        { title: "Ustad Hotel", lang: "Malayalam", year: 2012, poster: "posters/movies/ustad-hotel-2012.jpg" },
        { title: "Drishyam", lang: "Malayalam", year: 2013, poster: "posters/movies/drishyam-2013.jpg" },
        { title: "Bangalore Days", lang: "Malayalam", year: 2014, poster: "posters/movies/bangalore-days-2014.jpg" },
        { title: "Premam", lang: "Malayalam", year: 2015, poster: "posters/movies/premam-2015.jpg" },
        { title: "Maheshinte Prathikaaram", lang: "Malayalam", year: 2016, poster: "posters/movies/maheshinte-prathikaaram-2016.jpg" },
        { title: "Jallikattu", lang: "Malayalam", year: 2019, poster: "posters/movies/jallikattu-2019.jpg" },
        { title: "Kumbalangi Nights", lang: "Malayalam", year: 2019, poster: "posters/movies/kumbalangi-nights-2019.jpg" },
        { title: "Ayyappanum Koshiyum", lang: "Malayalam", year: 2020, poster: "posters/movies/ayyappanum-koshiyum-2020.jpg" },
        { title: "Joji", lang: "Malayalam", year: 2021, poster: "posters/movies/joji-2021.jpg" },
        { title: "Minnal Murali", lang: "Malayalam", year: 2021, poster: "posters/movies/minnal-murali-2021.jpg" },
        { title: "Nayattu", lang: "Malayalam", year: 2021, poster: "posters/movies/nayattu-2021.jpg" },
        { title: "The Great Indian Kitchen", lang: "Malayalam", year: 2021, poster: "posters/movies/the-great-indian-kitchen-2021.jpg" },
        { title: "Hridayam", lang: "Malayalam", year: 2022, poster: "posters/movies/hridayam-2022.jpg" },
        { title: "2018", lang: "Malayalam", year: 2023, poster: "posters/movies/2018-2023.jpg" },
        { title: "Romancham", lang: "Malayalam", year: 2023, poster: "posters/movies/romancham-2023.jpg" },
        { title: "Aavesham", lang: "Malayalam", year: 2024, poster: "posters/movies/aavesham-2024.jpg" },
        { title: "Bramayugam", lang: "Malayalam", year: 2024, poster: "posters/movies/bramayugam-2024.jpg" },
        { title: "Kishkindha Kaandam", lang: "Malayalam", year: 2024, poster: "posters/movies/kishkindha-kaandam-2024.jpg" },
        { title: "Manjummel Boys", lang: "Malayalam", year: 2024, poster: "posters/movies/manjummel-boys-2024.jpg" },
        { title: "Premalu", lang: "Malayalam", year: 2024, poster: "posters/movies/premalu-2024.jpg" },
        { title: "Lokah Chapter 1: Chandra", lang: "Malayalam", year: 2025, poster: "posters/movies/lokah-chapter-1-chandra-2025.jpg" },
        { title: "Kalidas", lang: "Tamil", year: 1931, poster: "posters/movies/kalidas-1931.jpg" },
        { title: "Haridas", lang: "Tamil", year: 1944, poster: "posters/movies/haridas-1944.jpg" },
        { title: "Parasakthi", lang: "Tamil", year: 1952, poster: "posters/movies/parasakthi-1952.jpg" },
        { title: "Veerapandiya Kattabomman", lang: "Tamil", year: 1959, poster: "posters/movies/veerapandiya-kattabomman-1959.jpg" },
        { title: "Pasamalar", lang: "Tamil", year: 1961, poster: "posters/movies/pasamalar-1961.jpg" },
        { title: "Server Sundaram", lang: "Tamil", year: 1964, poster: "posters/movies/server-sundaram-1964.jpg" },
        { title: "Thillana Mohanambal", lang: "Tamil", year: 1968, poster: "posters/movies/thillana-mohanambal-1968.jpg" },
        { title: "Ulagam Sutrum Valiban", lang: "Tamil", year: 1973, poster: "posters/movies/ulagam-sutrum-valiban-1973.jpg" },
        { title: "16 Vayathinile", lang: "Tamil", year: 1977, poster: "posters/movies/16-vayathinile-1977.jpg" },
        { title: "Mullum Malarum", lang: "Tamil", year: 1978, poster: "posters/movies/mullum-malarum-1978.jpg" },
        { title: "Aarilirunthu Arubathu Varai", lang: "Tamil", year: 1979, poster: "posters/movies/aarilirunthu-arubathu-varai-1979.jpg" },
        { title: "Moondram Pirai", lang: "Tamil", year: 1982, poster: "posters/movies/moondram-pirai-1982.jpg" },
        { title: "Mundram Pirai", lang: "Tamil", year: 1982, poster: "posters/movies/mundram-pirai-1982.jpg" },
        { title: "Mouna Ragam", lang: "Tamil", year: 1986, poster: "posters/movies/mouna-ragam-1986.jpg" },
        { title: "Nayakan", lang: "Tamil", year: 1987, poster: "posters/movies/nayakan-1987.jpg" },
        { title: "Agni Natchathiram", lang: "Tamil", year: 1988, poster: "posters/movies/agni-natchathiram-1988.jpg" },
        { title: "Apoorva Sagodharargal", lang: "Tamil", year: 1989, poster: "posters/movies/apoorva-sagodharargal-1989.jpg" },
        { title: "Anjali", lang: "Tamil", year: 1990, poster: "posters/movies/anjali-1990.jpg" },
        { title: "Thalapathi", lang: "Tamil", year: 1991, poster: "posters/movies/thalapathi-1991.jpg" },
        { title: "Roja", lang: "Tamil", year: 1992, poster: "posters/movies/roja-1992.jpg" },
        { title: "Thevar Magan", lang: "Tamil", year: 1992, poster: "posters/movies/thevar-magan-1992.jpg" },
        { title: "Gentleman", lang: "Tamil", year: 1993, poster: "posters/movies/gentleman-1993.jpg" },
        { title: "Kadhalan", lang: "Tamil", year: 1994, poster: "posters/movies/kadhalan-1994.jpg" },
        { title: "Baashha", lang: "Tamil", year: 1995, poster: "posters/movies/baashha-1995.jpg" },
        { title: "Bombay", lang: "Tamil", year: 1995, poster: "posters/movies/bombay-1995.jpg" },
        { title: "Indian", lang: "Tamil", year: 1996, poster: "posters/movies/indian-1996.jpg" },
        { title: "Minsara Kanavu", lang: "Tamil", year: 1997, poster: "posters/movies/minsara-kanavu-1997.jpg" },
        { title: "Jeans", lang: "Tamil", year: 1998, poster: "posters/movies/jeans-1998.jpg" },
        { title: "Padayappa", lang: "Tamil", year: 1999, poster: "posters/movies/padayappa-1999.jpg" },
        { title: "Alaipayuthey", lang: "Tamil", year: 2000, poster: "posters/movies/alaipayuthey-2000.jpg" },
        { title: "Minnale", lang: "Tamil", year: 2001, poster: "posters/movies/minnale-2001.jpg" },
        { title: "Kannathil Muthamittal", lang: "Tamil", year: 2002, poster: "posters/movies/kannathil-muthamittal-2002.jpg" },
        { title: "Anbe Sivam", lang: "Tamil", year: 2003, poster: "posters/movies/anbe-sivam-2003.jpg" },
        { title: "Pithamagan", lang: "Tamil", year: 2003, poster: "posters/movies/pithamagan-2003.jpg" },
        { title: "Autograph", lang: "Tamil", year: 2004, poster: "posters/movies/autograph-2004.jpg" },
        { title: "Ghilli", lang: "Tamil", year: 2004, poster: "posters/movies/ghilli-2004.jpg" },
        { title: "Chandramukhi", lang: "Tamil", year: 2005, poster: "posters/movies/chandramukhi-2005.jpg" },
        { title: "Veyil", lang: "Tamil", year: 2006, poster: "posters/movies/veyil-2006.jpg" },
        { title: "Paruthiveeran", lang: "Tamil", year: 2007, poster: "posters/movies/paruthiveeran-2007.jpg" },
        { title: "Subramaniapuram", lang: "Tamil", year: 2008, poster: "posters/movies/subramaniapuram-2008.jpg" },
        { title: "Ayan", lang: "Tamil", year: 2009, poster: "posters/movies/ayan-2009.jpg" },
        { title: "Enthiran", lang: "Tamil", year: 2010, poster: "posters/movies/enthiran-2010.jpg" },
        { title: "Vinnaithaandi Varuvaayaa", lang: "Tamil", year: 2010, poster: "posters/movies/vinnaithaandi-varuvaayaa-2010.jpg" },
        { title: "Aadukalam", lang: "Tamil", year: 2011, poster: "posters/movies/aadukalam-2011.jpg" },
        { title: "Mankatha", lang: "Tamil", year: 2011, poster: "posters/movies/mankatha-2011.jpg" },
        { title: "Pizza", lang: "Tamil", year: 2012, poster: "posters/movies/pizza-2012.jpg" },
        { title: "Soodhu Kavvum", lang: "Tamil", year: 2013, poster: "posters/movies/soodhu-kavvum-2013.jpg" },
        { title: "Jigarthanda", lang: "Tamil", year: 2014, poster: "posters/movies/jigarthanda-2014.jpg" },
        { title: "Kaaka Muttai", lang: "Tamil", year: 2015, poster: "posters/movies/kaaka-muttai-2015.jpg" },
        { title: "Visaranai", lang: "Tamil", year: 2015, poster: "posters/movies/visaranai-2015.jpg" },
        { title: "Aruvi", lang: "Tamil", year: 2017, poster: "posters/movies/aruvi-2017.jpg" },
        { title: "Vikram Vedha", lang: "Tamil", year: 2017, poster: "posters/movies/vikram-vedha-2017.jpg" },
        { title: "96", lang: "Tamil", year: 2018, poster: "posters/movies/96-2018.jpg" },
        { title: "Pariyerum Perumal", lang: "Tamil", year: 2018, poster: "posters/movies/pariyerum-perumal-2018.jpg" },
        { title: "Asuran", lang: "Tamil", year: 2019, poster: "posters/movies/asuran-2019.jpg" },
        { title: "Kaithi", lang: "Tamil", year: 2019, poster: "posters/movies/kaithi-2019.jpg" },
        { title: "Super Deluxe", lang: "Tamil", year: 2019, poster: "posters/movies/super-deluxe-2019.jpg" },
        { title: "Soorarai Pottru", lang: "Tamil", year: 2020, poster: "posters/movies/soorarai-pottru-2020.jpg" },
        { title: "Jai Bhim", lang: "Tamil", year: 2021, poster: "posters/movies/jai-bhim-2021.jpg" },
        { title: "Sarpatta Parambarai", lang: "Tamil", year: 2021, poster: "posters/movies/sarpatta-parambarai-2021.jpg" },
        { title: "Ponniyin Selvan: I", lang: "Tamil", year: 2022, poster: "posters/movies/ponniyin-selvan-i-2022.jpg" },
        { title: "Vikram", lang: "Tamil", year: 2022, poster: "posters/movies/vikram-2022.jpg" },
        { title: "Jailer", lang: "Tamil", year: 2023, poster: "posters/movies/jailer-2023.jpg" },
        { title: "Leo", lang: "Tamil", year: 2023, poster: "posters/movies/leo-2023.jpg" },
        { title: "Ponniyin Selvan: II", lang: "Tamil", year: 2023, poster: "posters/movies/ponniyin-selvan-ii-2023.jpg" },
        { title: "Amaran", lang: "Tamil", year: 2024, poster: "posters/movies/amaran-2024.jpg" },
        { title: "Lubber Pandhu", lang: "Tamil", year: 2024, poster: "posters/movies/lubber-pandhu-2024.jpg" },
        { title: "Maharaja", lang: "Tamil", year: 2024, poster: "posters/movies/maharaja-2024.jpg" },
        { title: "Meiyazhagan", lang: "Tamil", year: 2024, poster: "posters/movies/meiyazhagan-2024.jpg" },
        { title: "Good Bad Ugly", lang: "Tamil", year: 2025, poster: "posters/movies/good-bad-ugly-2025.jpg" },
        { title: "The Night of Counting the Years", lang: "Arabic", year: 1969, poster: "posters/movies/the-night-of-counting-the-years-1969.jpg" },
        { title: "West Beirut", lang: "Arabic", year: 1998, poster: "posters/movies/west-beirut-1998.jpg" },
        { title: "The Yacoubian Building", lang: "Arabic", year: 2006, poster: "posters/movies/the-yacoubian-building-2006.jpg" },
        { title: "Caramel", lang: "Arabic", year: 2007, poster: "posters/movies/caramel-2007.jpg" },
        { title: "Wadjda", lang: "Arabic", year: 2012, poster: "posters/movies/wadjda-2012.jpg" },
        { title: "Omar", lang: "Arabic", year: 2013, poster: "posters/movies/omar-2013.jpg" },
        { title: "Theeb", lang: "Arabic", year: 2014, poster: "posters/movies/theeb-2014.jpg" },
        { title: "The Insult", lang: "Arabic", year: 2017, poster: "posters/movies/the-insult-2017.jpg" },
        { title: "Capernaum", lang: "Arabic", year: 2018, poster: "posters/movies/capernaum-2018.jpg" },
        { title: "The Blue Caftan", lang: "Arabic", year: 2022, poster: "posters/movies/the-blue-caftan-2022.jpg" },
        { title: "Pather Panchali", lang: "Bangla", year: 1955, poster: "posters/movies/pather-panchali-1955.jpg" },
        { title: "Aparajito", lang: "Bangla", year: 1956, poster: "posters/movies/aparajito-1956.jpg" },
        { title: "Jalsaghar", lang: "Bangla", year: 1958, poster: "posters/movies/jalsaghar-1958.jpg" },
        { title: "Meghe Dhaka Tara", lang: "Bangla", year: 1960, poster: "posters/movies/meghe-dhaka-tara-1960.jpg" },
        { title: "Charulata", lang: "Bangla", year: 1964, poster: "posters/movies/charulata-1964.jpg" },
        { title: "Chokher Bali", lang: "Bangla", year: 2003, poster: "posters/movies/chokher-bali-2003.jpg" },
        { title: "Autograph", lang: "Bangla", year: 2010, poster: "posters/movies/autograph-2010.jpg" },
        { title: "Bhooter Bhabishyat", lang: "Bangla", year: 2012, poster: "posters/movies/bhooter-bhabishyat-2012.jpg" },
        { title: "Praktan", lang: "Bangla", year: 2016, poster: "posters/movies/praktan-2016.jpg" },
        { title: "Belashuru", lang: "Bangla", year: 2022, poster: "posters/movies/belashuru-2022.jpg" },
        { title: "Money Has Four Legs", lang: "Burmese", year: 2010, poster: "posters/movies/money-has-four-legs-2010.jpg" },
        { title: "The Monk", lang: "Burmese", year: 2014, poster: "posters/movies/the-monk-2014.jpg" },
        { title: "The Road to Mandalay", lang: "Burmese", year: 2016, poster: "posters/movies/the-road-to-mandalay-2016.jpg" },
        { title: "Mudras Calling", lang: "Burmese", year: 2018, poster: "posters/movies/mudras-calling-2018.jpg" },
        { title: "Now and Ever", lang: "Burmese", year: 2019, poster: "posters/movies/now-and-ever-2019.jpg" },
        { title: "Project A", lang: "Cantonese", year: 1983, poster: "posters/movies/project-a-1983.jpg" },
        { title: "Police Story", lang: "Cantonese", year: 1985, poster: "posters/movies/police-story-1985.jpg" },
        { title: "A Better Tomorrow", lang: "Cantonese", year: 1986, poster: "posters/movies/a-better-tomorrow-1986.jpg" },
        { title: "The Killer", lang: "Cantonese", year: 1989, poster: "posters/movies/the-killer-1989.jpg" },
        { title: "Chungking Express", lang: "Cantonese", year: 1994, poster: "posters/movies/chungking-express-1994.jpg" },
        { title: "In the Mood for Love", lang: "Cantonese", year: 2000, poster: "posters/movies/in-the-mood-for-love-2000.jpg" },
        { title: "Shaolin Soccer", lang: "Cantonese", year: 2001, poster: "posters/movies/shaolin-soccer-2001.jpg" },
        { title: "Infernal Affairs", lang: "Cantonese", year: 2002, poster: "posters/movies/infernal-affairs-2002.jpg" },
        { title: "Election", lang: "Cantonese", year: 2005, poster: "posters/movies/election-2005.jpg" },
        { title: "Ip Man", lang: "Cantonese", year: 2008, poster: "posters/movies/ip-man-2008.jpg" },
        { title: "Raise the Red Lantern", lang: "Chinese (Mandarin)", year: 1991, poster: "posters/movies/raise-the-red-lantern-1991.jpg" },
        { title: "Farewell My Concubine", lang: "Chinese (Mandarin)", year: 1993, poster: "posters/movies/farewell-my-concubine-1993.jpg" },
        { title: "To Live", lang: "Chinese (Mandarin)", year: 1994, poster: "posters/movies/to-live-1994.jpg" },
        { title: "Crouching Tiger, Hidden Dragon", lang: "Chinese (Mandarin)", year: 2000, poster: "posters/movies/crouching-tiger-hidden-dragon-2000.jpg" },
        { title: "Hero", lang: "Chinese (Mandarin)", year: 2002, poster: "posters/movies/hero-2002.jpg" },
        { title: "A Touch of Sin", lang: "Chinese (Mandarin)", year: 2013, poster: "posters/movies/a-touch-of-sin-2013.jpg" },
        { title: "The Grandmaster", lang: "Chinese (Mandarin)", year: 2013, poster: "posters/movies/the-grandmaster-2013.jpg" },
        { title: "Better Days", lang: "Chinese (Mandarin)", year: 2019, poster: "posters/movies/better-days-2019.jpg" },
        { title: "The Wandering Earth", lang: "Chinese (Mandarin)", year: 2019, poster: "posters/movies/the-wandering-earth-2019.jpg" },
        { title: "The Shop on Main Street", lang: "Czech", year: 1965, poster: "posters/movies/the-shop-on-main-street-1965.jpg" },
        { title: "Closely Watched Trains", lang: "Czech", year: 1966, poster: "posters/movies/closely-watched-trains-1966.jpg" },
        { title: "Daisies", lang: "Czech", year: 1966, poster: "posters/movies/daisies-1966.jpg" },
        { title: "The Firemen's Ball", lang: "Czech", year: 1967, poster: "posters/movies/the-firemen-s-ball-1967.jpg" },
        { title: "The Cremator", lang: "Czech", year: 1969, poster: "posters/movies/the-cremator-1969.jpg" },
        { title: "Three Wishes for Cinderella", lang: "Czech", year: 1973, poster: "posters/movies/three-wishes-for-cinderella-1973.jpg" },
        { title: "The Elementary School", lang: "Czech", year: 1991, poster: "posters/movies/the-elementary-school-1991.jpg" },
        { title: "Kolya", lang: "Czech", year: 1996, poster: "posters/movies/kolya-1996.jpg" },
        { title: "Divided We Fall", lang: "Czech", year: 2000, poster: "posters/movies/divided-we-fall-2000.jpg" },
        { title: "The Teacher", lang: "Czech", year: 2016, poster: "posters/movies/the-teacher-2016.jpg" },
        { title: "Ordet", lang: "Danish", year: 1955, poster: "posters/movies/ordet-1955.jpg" },
        { title: "Babette's Feast", lang: "Danish", year: 1987, poster: "posters/movies/babette-s-feast-1987.jpg" },
        { title: "Pusher", lang: "Danish", year: 1996, poster: "posters/movies/pusher-1996.jpg" },
        { title: "Festen", lang: "Danish", year: 1998, poster: "posters/movies/festen-1998.jpg" },
        { title: "The Celebration", lang: "Danish", year: 1998, poster: "posters/movies/the-celebration-1998.jpg" },
        { title: "A Royal Affair", lang: "Danish", year: 2012, poster: "posters/movies/a-royal-affair-2012.jpg" },
        { title: "The Hunt", lang: "Danish", year: 2012, poster: "posters/movies/the-hunt-2012.jpg" },
        { title: "The Guilty", lang: "Danish", year: 2018, poster: "posters/movies/the-guilty-2018.jpg" },
        { title: "Another Round", lang: "Danish", year: 2020, poster: "posters/movies/another-round-2020.jpg" },
        { title: "Riders of Justice", lang: "Danish", year: 2020, poster: "posters/movies/riders-of-justice-2020.jpg" },
        { title: "Fanfare", lang: "Dutch", year: 1958, poster: "posters/movies/fanfare-1958.jpg" },
        { title: "Turkish Delight", lang: "Dutch", year: 1973, poster: "posters/movies/turkish-delight-1973.jpg" },
        { title: "The Assault", lang: "Dutch", year: 1986, poster: "posters/movies/the-assault-1986.jpg" },
        { title: "The Vanishing", lang: "Dutch", year: 1988, poster: "posters/movies/the-vanishing-1988.jpg" },
        { title: "Antonia's Line", lang: "Dutch", year: 1995, poster: "posters/movies/antonia-s-line-1995.jpg" },
        { title: "Character", lang: "Dutch", year: 1997, poster: "posters/movies/character-1997.jpg" },
        { title: "Black Book", lang: "Dutch", year: 2006, poster: "posters/movies/black-book-2006.jpg" },
        { title: "Borgman", lang: "Dutch", year: 2013, poster: "posters/movies/borgman-2013.jpg" },
        { title: "The Paradise Suite", lang: "Dutch", year: 2015, poster: "posters/movies/the-paradise-suite-2015.jpg" },
        { title: "The Resistance Banker", lang: "Dutch", year: 2018, poster: "posters/movies/the-resistance-banker-2018.jpg" },
        { title: "The Godfather", lang: "English", year: 1972, poster: "posters/movies/the-godfather-1972.jpg", director: "Francis Ford Coppola", cast: "Marlon Brando", rating: 9.2 },
        { title: "Schindler's List", lang: "English", year: 1993, poster: "posters/movies/schindler-s-list-1993.jpg", director: "Steven Spielberg", cast: "Liam Neeson", rating: 9.0 },
        { title: "Forrest Gump", lang: "English", year: 1994, poster: "posters/movies/forrest-gump-1994.jpg", director: "Robert Zemeckis", cast: "Tom Hanks", rating: 8.8 },
        { title: "Pulp Fiction", lang: "English", year: 1994, poster: "posters/movies/pulp-fiction-1994.jpg", director: "Quentin Tarantino", cast: "John Travolta", rating: 8.9 },
        { title: "The Shawshank Redemption", lang: "English", year: 1994, poster: "posters/movies/the-shawshank-redemption-1994.jpg", director: "Frank Darabont", cast: "Tim Robbins", rating: 9.3 },
        { title: "Titanic", lang: "English", year: 1997, poster: "posters/movies/titanic-1997.jpg", director: "James Cameron", cast: "Leonardo DiCaprio", rating: 7.9 },
        { title: "The Lord of the Rings: The Return of the King", lang: "English", year: 2003, poster: "posters/movies/the-lord-of-the-rings-the-return-of-the-king-2003.jpg" },
        { title: "The Dark Knight", lang: "English", year: 2008, poster: "posters/movies/the-dark-knight-2008.jpg", director: "Christopher Nolan", cast: "Christian Bale", rating: 9.0 },
        { title: "Inception", lang: "English", year: 2010, poster: "posters/movies/inception-2010.jpg", director: "Christopher Nolan", cast: "Leonardo DiCaprio", rating: 8.8 },
        { title: "Oppenheimer", lang: "English", year: 2023, poster: "posters/movies/oppenheimer-2023.jpg", director: "Christopher Nolan", cast: "Cillian Murphy", rating: 8.9 },
        { title: "Manila in the Claws of Light", lang: "Filipino", year: 1975, poster: "posters/movies/manila-in-the-claws-of-light-1975.jpg" },
        { title: "Maynila sa mga Kuko ng Liwanag", lang: "Filipino", year: 1975, poster: "posters/movies/maynila-sa-mga-kuko-ng-liwanag-1975.jpg" },
        { title: "Himala", lang: "Filipino", year: 1982, poster: "posters/movies/himala-1982.jpg" },
        { title: "Four Sisters and a Wedding", lang: "Filipino", year: 2013, poster: "posters/movies/four-sisters-and-a-wedding-2013.jpg" },
        { title: "On the Job", lang: "Filipino", year: 2013, poster: "posters/movies/on-the-job-2013.jpg" },
        { title: "Heneral Luna", lang: "Filipino", year: 2015, poster: "posters/movies/heneral-luna-2015.jpg" },
        { title: "The Woman Who Left", lang: "Filipino", year: 2016, poster: "posters/movies/the-woman-who-left-2016.jpg" },
        { title: "Kita Kita", lang: "Filipino", year: 2017, poster: "posters/movies/kita-kita-2017.jpg" },
        { title: "Cleaners", lang: "Filipino", year: 2019, poster: "posters/movies/cleaners-2019.jpg" },
        { title: "Hello, Love, Goodbye", lang: "Filipino", year: 2019, poster: "posters/movies/hello-love-goodbye-2019.jpg" },
        { title: "The Unknown Soldier", lang: "Finnish", year: 1955, poster: "posters/movies/the-unknown-soldier-1955.jpg" },
        { title: "The Winter War", lang: "Finnish", year: 1989, poster: "posters/movies/the-winter-war-1989.jpg" },
        { title: "The Match Factory Girl", lang: "Finnish", year: 1990, poster: "posters/movies/the-match-factory-girl-1990.jpg" },
        { title: "The Man Without a Past", lang: "Finnish", year: 2002, poster: "posters/movies/the-man-without-a-past-2002.jpg" },
        { title: "Rare Exports", lang: "Finnish", year: 2010, poster: "posters/movies/rare-exports-2010.jpg" },
        { title: "Le Havre", lang: "Finnish", year: 2011, poster: "posters/movies/le-havre-2011.jpg" },
        { title: "The Happiest Day in the Life of Olli Mäki", lang: "Finnish", year: 2016, poster: "posters/movies/the-happiest-day-in-the-life-of-olli-maki-2016.jpg" },
        { title: "The Other Side of Hope", lang: "Finnish", year: 2017, poster: "posters/movies/the-other-side-of-hope-2017.jpg" },
        { title: "Compartment No. 6", lang: "Finnish", year: 2021, poster: "posters/movies/compartment-no-6-2021.jpg" },
        { title: "Fallen Leaves", lang: "Finnish", year: 2023, poster: "posters/movies/fallen-leaves-2023.jpg" },
        { title: "The Rules of the Game", lang: "French", year: 1939, poster: "posters/movies/the-rules-of-the-game-1939.jpg" },
        { title: "The 400 Blows", lang: "French", year: 1959, poster: "posters/movies/the-400-blows-1959.jpg" },
        { title: "The Umbrellas of Cherbourg", lang: "French", year: 1964, poster: "posters/movies/the-umbrellas-of-cherbourg-1964.jpg" },
        { title: "La Haine", lang: "French", year: 1995, poster: "posters/movies/la-haine-1995.jpg" },
        { title: "Amélie", lang: "French", year: 2001, poster: "posters/movies/amelie-2001.jpg" },
        { title: "A Prophet", lang: "French", year: 2009, poster: "posters/movies/a-prophet-2009.jpg" },
        { title: "The Intouchables", lang: "French", year: 2011, poster: "posters/movies/the-intouchables-2011.jpg" },
        { title: "Blue Is the Warmest Colour", lang: "French", year: 2013, poster: "posters/movies/blue-is-the-warmest-colour-2013.jpg" },
        { title: "Portrait of a Lady on Fire", lang: "French", year: 2019, poster: "posters/movies/portrait-of-a-lady-on-fire-2019.jpg" },
        { title: "Anatomy of a Fall", lang: "French", year: 2023, poster: "posters/movies/anatomy-of-a-fall-2023.jpg" },
        { title: "M", lang: "German", year: 1931, poster: "posters/movies/m-1931.jpg" },
        { title: "The Tin Drum", lang: "German", year: 1979, poster: "posters/movies/the-tin-drum-1979.jpg" },
        { title: "Wings of Desire", lang: "German", year: 1987, poster: "posters/movies/wings-of-desire-1987.jpg" },
        { title: "Run Lola Run", lang: "German", year: 1998, poster: "posters/movies/run-lola-run-1998.jpg" },
        { title: "Good Bye, Lenin!", lang: "German", year: 2003, poster: "posters/movies/good-bye-lenin-2003.jpg" },
        { title: "Downfall", lang: "German", year: 2004, poster: "posters/movies/downfall-2004.jpg" },
        { title: "The Lives of Others", lang: "German", year: 2006, poster: "posters/movies/the-lives-of-others-2006.jpg" },
        { title: "The White Ribbon", lang: "German", year: 2009, poster: "posters/movies/the-white-ribbon-2009.jpg" },
        { title: "Toni Erdmann", lang: "German", year: 2016, poster: "posters/movies/toni-erdmann-2016.jpg" },
        { title: "All Quiet on the Western Front", lang: "German", year: 2022, poster: "posters/movies/all-quiet-on-the-western-front-2022.jpg" },
        { title: "Stella", lang: "Greek", year: 1955, poster: "posters/movies/stella-1955.jpg" },
        { title: "Zorba the Greek", lang: "Greek", year: 1964, poster: "posters/movies/zorba-the-greek-1964.jpg" },
        { title: "The Travelling Players", lang: "Greek", year: 1975, poster: "posters/movies/the-travelling-players-1975.jpg" },
        { title: "Eternity and a Day", lang: "Greek", year: 1998, poster: "posters/movies/eternity-and-a-day-1998.jpg" },
        { title: "A Touch of Spice", lang: "Greek", year: 2003, poster: "posters/movies/a-touch-of-spice-2003.jpg" },
        { title: "Dogtooth", lang: "Greek", year: 2009, poster: "posters/movies/dogtooth-2009.jpg" },
        { title: "Attenberg", lang: "Greek", year: 2010, poster: "posters/movies/attenberg-2010.jpg" },
        { title: "Little England", lang: "Greek", year: 2013, poster: "posters/movies/little-england-2013.jpg" },
        { title: "Miss Violence", lang: "Greek", year: 2013, poster: "posters/movies/miss-violence-2013.jpg" },
        { title: "The Other Me", lang: "Greek", year: 2016, poster: "posters/movies/the-other-me-2016.jpg" },
        { title: "Late Marriage", lang: "Hebrew", year: 2001, poster: "posters/movies/late-marriage-2001.jpg" },
        { title: "Beaufort", lang: "Hebrew", year: 2007, poster: "posters/movies/beaufort-2007.jpg" },
        { title: "The Band's Visit", lang: "Hebrew", year: 2007, poster: "posters/movies/the-band-s-visit-2007.jpg" },
        { title: "Waltz with Bashir", lang: "Hebrew", year: 2008, poster: "posters/movies/waltz-with-bashir-2008.jpg" },
        { title: "Ajami", lang: "Hebrew", year: 2009, poster: "posters/movies/ajami-2009.jpg" },
        { title: "Footnote", lang: "Hebrew", year: 2011, poster: "posters/movies/footnote-2011.jpg" },
        { title: "Fill the Void", lang: "Hebrew", year: 2012, poster: "posters/movies/fill-the-void-2012.jpg" },
        { title: "Gett: The Trial of Viviane Amsalem", lang: "Hebrew", year: 2014, poster: "posters/movies/gett-the-trial-of-viviane-amsalem-2014.jpg" },
        { title: "The Kindergarten Teacher", lang: "Hebrew", year: 2014, poster: "posters/movies/the-kindergarten-teacher-2014.jpg" },
        { title: "Foxtrot", lang: "Hebrew", year: 2017, poster: "posters/movies/foxtrot-2017.jpg" },
        { title: "The Witness", lang: "Hungarian", year: 1969, poster: "posters/movies/the-witness-1969.jpg" },
        { title: "Mephisto", lang: "Hungarian", year: 1981, poster: "posters/movies/mephisto-1981.jpg" },
        { title: "My 20th Century", lang: "Hungarian", year: 1989, poster: "posters/movies/my-20th-century-1989.jpg" },
        { title: "Satantango", lang: "Hungarian", year: 1994, poster: "posters/movies/satantango-1994.jpg" },
        { title: "Werckmeister Harmonies", lang: "Hungarian", year: 2000, poster: "posters/movies/werckmeister-harmonies-2000.jpg" },
        { title: "Kontroll", lang: "Hungarian", year: 2003, poster: "posters/movies/kontroll-2003.jpg" },
        { title: "The Turin Horse", lang: "Hungarian", year: 2011, poster: "posters/movies/the-turin-horse-2011.jpg" },
        { title: "White God", lang: "Hungarian", year: 2014, poster: "posters/movies/white-god-2014.jpg" },
        { title: "Son of Saul", lang: "Hungarian", year: 2015, poster: "posters/movies/son-of-saul-2015.jpg" },
        { title: "On Body and Soul", lang: "Hungarian", year: 2017, poster: "posters/movies/on-body-and-soul-2017.jpg" },
        { title: "What's Up with Love?", lang: "Indonesian", year: 2002, poster: "posters/movies/what-s-up-with-love-2002.jpg" },
        { title: "Laskar Pelangi", lang: "Indonesian", year: 2008, poster: "posters/movies/laskar-pelangi-2008.jpg" },
        { title: "The Dancer", lang: "Indonesian", year: 2011, poster: "posters/movies/the-dancer-2011.jpg" },
        { title: "The Raid", lang: "Indonesian", year: 2011, poster: "posters/movies/the-raid-2011.jpg" },
        { title: "The Raid 2", lang: "Indonesian", year: 2014, poster: "posters/movies/the-raid-2-2014.jpg" },
        { title: "Marlina the Murderer in Four Acts", lang: "Indonesian", year: 2017, poster: "posters/movies/marlina-the-murderer-in-four-acts-2017.jpg" },
        { title: "Satan's Slaves", lang: "Indonesian", year: 2017, poster: "posters/movies/satan-s-slaves-2017.jpg" },
        { title: "The Night Comes for Us", lang: "Indonesian", year: 2018, poster: "posters/movies/the-night-comes-for-us-2018.jpg" },
        { title: "Impetigore", lang: "Indonesian", year: 2019, poster: "posters/movies/impetigore-2019.jpg" },
        { title: "Autobiography", lang: "Indonesian", year: 2022, poster: "posters/movies/autobiography-2022.jpg" },
        { title: "The Commitments", lang: "Irish", year: 1991, poster: "posters/movies/the-commitments-1991.jpg" },
        { title: "The Wind That Shakes the Barley", lang: "Irish", year: 2006, poster: "posters/movies/the-wind-that-shakes-the-barley-2006.jpg" },
        { title: "Once", lang: "Irish", year: 2007, poster: "posters/movies/once-2007.jpg" },
        { title: "The Secret of Kells", lang: "Irish", year: 2009, poster: "posters/movies/the-secret-of-kells-2009.jpg" },
        { title: "The Guard", lang: "Irish", year: 2011, poster: "posters/movies/the-guard-2011.jpg" },
        { title: "Brooklyn", lang: "Irish", year: 2015, poster: "posters/movies/brooklyn-2015.jpg" },
        { title: "Sing Street", lang: "Irish", year: 2016, poster: "posters/movies/sing-street-2016.jpg" },
        { title: "Calm with Horses", lang: "Irish", year: 2019, poster: "posters/movies/calm-with-horses-2019.jpg" },
        { title: "The Banshees of Inisherin", lang: "Irish", year: 2022, poster: "posters/movies/the-banshees-of-inisherin-2022.jpg" },
        { title: "The Quiet Girl", lang: "Irish", year: 2022, poster: "posters/movies/the-quiet-girl-2022.jpg" },
        { title: "Bicycle Thieves", lang: "Italian", year: 1948, poster: "posters/movies/bicycle-thieves-1948.jpg" },
        { title: "Umberto D.", lang: "Italian", year: 1952, poster: "posters/movies/umberto-d-1952.jpg" },
        { title: "La Dolce Vita", lang: "Italian", year: 1960, poster: "posters/movies/la-dolce-vita-1960.jpg" },
        { title: "8½", lang: "Italian", year: 1963, poster: "posters/movies/8-and-a-half-1963.jpg" },
        { title: "The Leopard", lang: "Italian", year: 1963, poster: "posters/movies/the-leopard-1963.jpg" },
        { title: "Suspiria", lang: "Italian", year: 1977, poster: "posters/movies/suspiria-1977.jpg" },
        { title: "Cinema Paradiso", lang: "Italian", year: 1988, poster: "posters/movies/cinema-paradiso-1988.jpg" },
        { title: "Life Is Beautiful", lang: "Italian", year: 1997, poster: "posters/movies/life-is-beautiful-1997.jpg" },
        { title: "Gomorrah", lang: "Italian", year: 2008, poster: "posters/movies/gomorrah-2008.jpg" },
        { title: "The Great Beauty", lang: "Italian", year: 2013, poster: "posters/movies/the-great-beauty-2013.jpg" },
        { title: "Rashomon", lang: "Japanese", year: 1950, poster: "posters/movies/rashomon-1950.jpg" },
        { title: "Tokyo Story", lang: "Japanese", year: 1953, poster: "posters/movies/tokyo-story-1953.jpg" },
        { title: "Godzilla", lang: "Japanese", year: 1954, poster: "posters/movies/godzilla-1954.jpg" },
        { title: "Seven Samurai", lang: "Japanese", year: 1954, poster: "posters/movies/seven-samurai-1954.jpg" },
        { title: "Akira", lang: "Japanese", year: 1988, poster: "posters/movies/akira-1988.jpg" },
        { title: "Battle Royale", lang: "Japanese", year: 2000, poster: "posters/movies/battle-royale-2000.jpg" },
        { title: "Spirited Away", lang: "Japanese", year: 2001, poster: "posters/movies/spirited-away-2001.jpg", director: "Hayao Miyazaki", studio: "Studio Ghibli", rating: 8.6 },
        { title: "Your Name", lang: "Japanese", year: 2016, poster: "posters/movies/your-name-2016.jpg" },
        { title: "Shoplifters", lang: "Japanese", year: 2018, poster: "posters/movies/shoplifters-2018.jpg" },
        { title: "Drive My Car", lang: "Japanese", year: 2021, poster: "posters/movies/drive-my-car-2021.jpg" },
        { title: "The Missing Picture", lang: "Khmer", year: 2013, poster: "posters/movies/the-missing-picture-2013.jpg" },
        { title: "The Last Reel", lang: "Khmer", year: 2014, poster: "posters/movies/the-last-reel-2014.jpg" },
        { title: "First They Killed My Father", lang: "Khmer", year: 2017, poster: "posters/movies/first-they-killed-my-father-2017.jpg" },
        { title: "Jailbreak", lang: "Khmer", year: 2017, poster: "posters/movies/jailbreak-2017.jpg" },
        { title: "White Building", lang: "Khmer", year: 2021, poster: "posters/movies/white-building-2021.jpg" },
        { title: "Memories of Murder", lang: "Korean", year: 2003, poster: "posters/movies/memories-of-murder-2003.jpg" },
        { title: "Oldboy", lang: "Korean", year: 2003, poster: "posters/movies/oldboy-2003.jpg" },
        { title: "The Host", lang: "Korean", year: 2006, poster: "posters/movies/the-host-2006.jpg" },
        { title: "The Handmaiden", lang: "Korean", year: 2016, poster: "posters/movies/the-handmaiden-2016.jpg" },
        { title: "The Wailing", lang: "Korean", year: 2016, poster: "posters/movies/the-wailing-2016.jpg" },
        { title: "Train to Busan", lang: "Korean", year: 2016, poster: "posters/movies/train-to-busan-2016.jpg" },
        { title: "Burning", lang: "Korean", year: 2018, poster: "posters/movies/burning-2018.jpg" },
        { title: "Parasite", lang: "Korean", year: 2019, poster: "posters/movies/parasite-2019.jpg" },
        { title: "Decision to Leave", lang: "Korean", year: 2022, poster: "posters/movies/decision-to-leave-2022.jpg" },
        { title: "12.12: The Day", lang: "Korean", year: 2023, poster: "posters/movies/12-12-the-day-2023.jpg" },
        { title: "Pendekar Bujang Lapok", lang: "Malay", year: 1959, poster: "posters/movies/pendekar-bujang-lapok-1959.jpg" },
        { title: "Puteri Gunung Ledang", lang: "Malay", year: 2004, poster: "posters/movies/puteri-gunung-ledang-2004.jpg" },
        { title: "Sepet", lang: "Malay", year: 2004, poster: "posters/movies/sepet-2004.jpg" },
        { title: "The Journey", lang: "Malay", year: 2014, poster: "posters/movies/the-journey-2014.jpg" },
        { title: "Polis Evo", lang: "Malay", year: 2015, poster: "posters/movies/polis-evo-2015.jpg" },
        { title: "Munafik", lang: "Malay", year: 2016, poster: "posters/movies/munafik-2016.jpg" },
        { title: "Ola Bola", lang: "Malay", year: 2016, poster: "posters/movies/ola-bola-2016.jpg" },
        { title: "Adiwiraku", lang: "Malay", year: 2017, poster: "posters/movies/adiwiraku-2017.jpg" },
        { title: "Hantu Kak Limah", lang: "Malay", year: 2018, poster: "posters/movies/hantu-kak-limah-2018.jpg" },
        { title: "Mat Kilau", lang: "Malay", year: 2022, poster: "posters/movies/mat-kilau-2022.jpg" },
        { title: "Kagbeni", lang: "Nepali", year: 2008, poster: "posters/movies/kagbeni-2008.jpg" },
        { title: "Loot", lang: "Nepali", year: 2012, poster: "posters/movies/loot-2012.jpg" },
        { title: "Jhola", lang: "Nepali", year: 2014, poster: "posters/movies/jhola-2014.jpg" },
        { title: "Kabaddi", lang: "Nepali", year: 2014, poster: "posters/movies/kabaddi-2014.jpg" },
        { title: "Talakjung vs Tulke", lang: "Nepali", year: 2014, poster: "posters/movies/talakjung-vs-tulke-2014.jpg" },
        { title: "Pashupati Prasad", lang: "Nepali", year: 2016, poster: "posters/movies/pashupati-prasad-2016.jpg" },
        { title: "Prem Geet", lang: "Nepali", year: 2016, poster: "posters/movies/prem-geet-2016.jpg" },
        { title: "Aama", lang: "Nepali", year: 2020, poster: "posters/movies/aama-2020.jpg" },
        { title: "Mahapurush", lang: "Nepali", year: 2022, poster: "posters/movies/mahapurush-2022.jpg" },
        { title: "Jaari", lang: "Nepali", year: 2023, poster: "posters/movies/jaari-2023.jpg" },
        { title: "Insomnia", lang: "Norwegian", year: 1997, poster: "posters/movies/insomnia-1997.jpg" },
        { title: "Elling", lang: "Norwegian", year: 2001, poster: "posters/movies/elling-2001.jpg" },
        { title: "Reprise", lang: "Norwegian", year: 2006, poster: "posters/movies/reprise-2006.jpg" },
        { title: "Troll Hunter", lang: "Norwegian", year: 2010, poster: "posters/movies/troll-hunter-2010.jpg" },
        { title: "Headhunters", lang: "Norwegian", year: 2011, poster: "posters/movies/headhunters-2011.jpg" },
        { title: "Kon-Tiki", lang: "Norwegian", year: 2012, poster: "posters/movies/kon-tiki-2012.jpg" },
        { title: "The Wave", lang: "Norwegian", year: 2015, poster: "posters/movies/the-wave-2015.jpg" },
        { title: "The King's Choice", lang: "Norwegian", year: 2016, poster: "posters/movies/the-king-s-choice-2016.jpg" },
        { title: "Thelma", lang: "Norwegian", year: 2017, poster: "posters/movies/thelma-2017.jpg" },
        { title: "The Worst Person in the World", lang: "Norwegian", year: 2021, poster: "posters/movies/the-worst-person-in-the-world-2021.jpg" },
        { title: "The Cow", lang: "Persian", year: 1969, poster: "posters/movies/the-cow-1969.jpg" },
        { title: "Close-Up", lang: "Persian", year: 1990, poster: "posters/movies/close-up-1990.jpg" },
        { title: "The White Balloon", lang: "Persian", year: 1995, poster: "posters/movies/the-white-balloon-1995.jpg" },
        { title: "Children of Heaven", lang: "Persian", year: 1997, poster: "posters/movies/children-of-heaven-1997.jpg" },
        { title: "Taste of Cherry", lang: "Persian", year: 1997, poster: "posters/movies/taste-of-cherry-1997.jpg" },
        { title: "The Color of Paradise", lang: "Persian", year: 1999, poster: "posters/movies/the-color-of-paradise-1999.jpg" },
        { title: "About Elly", lang: "Persian", year: 2009, poster: "posters/movies/about-elly-2009.jpg" },
        { title: "A Separation", lang: "Persian", year: 2011, poster: "posters/movies/a-separation-2011.jpg" },
        { title: "The Salesman", lang: "Persian", year: 2016, poster: "posters/movies/the-salesman-2016.jpg" },
        { title: "No Bears", lang: "Persian", year: 2022, poster: "posters/movies/no-bears-2022.jpg" },
        { title: "Ashes and Diamonds", lang: "Polish", year: 1958, poster: "posters/movies/ashes-and-diamonds-1958.jpg" },
        { title: "Knife in the Water", lang: "Polish", year: 1962, poster: "posters/movies/knife-in-the-water-1962.jpg" },
        { title: "The Saragossa Manuscript", lang: "Polish", year: 1965, poster: "posters/movies/the-saragossa-manuscript-1965.jpg" },
        { title: "The Promised Land", lang: "Polish", year: 1975, poster: "posters/movies/the-promised-land-1975.jpg" },
        { title: "The Decalogue", lang: "Polish", year: 1989, poster: "posters/movies/the-decalogue-1989.jpg" },
        { title: "The Pianist", lang: "Polish", year: 2002, poster: "posters/movies/the-pianist-2002.jpg" },
        { title: "Ida", lang: "Polish", year: 2013, poster: "posters/movies/ida-2013.jpg" },
        { title: "Cold War", lang: "Polish", year: 2018, poster: "posters/movies/cold-war-2018.jpg" },
        { title: "Corpus Christi", lang: "Polish", year: 2019, poster: "posters/movies/corpus-christi-2019.jpg" },
        { title: "EO", lang: "Polish", year: 2022, poster: "posters/movies/eo-2022.jpg" },
        { title: "Aniki-Bóbó", lang: "Portuguese", year: 1942, poster: "posters/movies/aniki-bobo-1942.jpg" },
        { title: "The Cannibals", lang: "Portuguese", year: 1988, poster: "posters/movies/the-cannibals-1988.jpg" },
        { title: "Alice", lang: "Portuguese", year: 2005, poster: "posters/movies/alice-2005.jpg" },
        { title: "Blood of My Blood", lang: "Portuguese", year: 2011, poster: "posters/movies/blood-of-my-blood-2011.jpg" },
        { title: "Tabu", lang: "Portuguese", year: 2012, poster: "posters/movies/tabu-2012.jpg" },
        { title: "The Gilded Cage", lang: "Portuguese", year: 2013, poster: "posters/movies/the-gilded-cage-2013.jpg" },
        { title: "The Ornitologist", lang: "Portuguese", year: 2016, poster: "posters/movies/the-ornitologist-2016.jpg" },
        { title: "The Portuguese Woman", lang: "Portuguese", year: 2018, poster: "posters/movies/the-portuguese-woman-2018.jpg" },
        { title: "Vitalina Varela", lang: "Portuguese", year: 2019, poster: "posters/movies/vitalina-varela-2019.jpg" },
        { title: "The Metamorphosis of Birds", lang: "Portuguese", year: 2020, poster: "posters/movies/the-metamorphosis-of-birds-2020.jpg" },
        { title: "The Death of Mr. Lazarescu", lang: "Romanian", year: 2005, poster: "posters/movies/the-death-of-mr-lazarescu-2005.jpg" },
        { title: "4 Months, 3 Weeks and 2 Days", lang: "Romanian", year: 2007, poster: "posters/movies/4-months-3-weeks-and-2-days-2007.jpg" },
        { title: "Police, Adjective", lang: "Romanian", year: 2009, poster: "posters/movies/police-adjective-2009.jpg" },
        { title: "Beyond the Hills", lang: "Romanian", year: 2012, poster: "posters/movies/beyond-the-hills-2012.jpg" },
        { title: "Child's Pose", lang: "Romanian", year: 2013, poster: "posters/movies/child-s-pose-2013.jpg" },
        { title: "Aferim!", lang: "Romanian", year: 2015, poster: "posters/movies/aferim-2015.jpg" },
        { title: "Graduation", lang: "Romanian", year: 2016, poster: "posters/movies/graduation-2016.jpg" },
        { title: "Collective", lang: "Romanian", year: 2019, poster: "posters/movies/collective-2019.jpg" },
        { title: "Bad Luck Banging or Loony Porn", lang: "Romanian", year: 2021, poster: "posters/movies/bad-luck-banging-or-loony-porn-2021.jpg" },
        { title: "The New Year That Never Came", lang: "Romanian", year: 2024, poster: "posters/movies/the-new-year-that-never-came-2024.jpg" },
        { title: "Battleship Potemkin", lang: "Russian", year: 1925, poster: "posters/movies/battleship-potemkin-1925.jpg" },
        { title: "Andrei Rublev", lang: "Russian", year: 1966, poster: "posters/movies/andrei-rublev-1966.jpg" },
        { title: "Solaris", lang: "Russian", year: 1972, poster: "posters/movies/solaris-1972.jpg" },
        { title: "The Irony of Fate", lang: "Russian", year: 1975, poster: "posters/movies/the-irony-of-fate-1975.jpg" },
        { title: "Stalker", lang: "Russian", year: 1979, poster: "posters/movies/stalker-1979.jpg" },
        { title: "Come and See", lang: "Russian", year: 1985, poster: "posters/movies/come-and-see-1985.jpg" },
        { title: "Brother", lang: "Russian", year: 1997, poster: "posters/movies/brother-1997.jpg" },
        { title: "The Return", lang: "Russian", year: 2003, poster: "posters/movies/the-return-2003.jpg" },
        { title: "Leviathan", lang: "Russian", year: 2014, poster: "posters/movies/leviathan-2014.jpg" },
        { title: "Loveless", lang: "Russian", year: 2017, poster: "posters/movies/loveless-2017.jpg" },
        { title: "Rekava", lang: "Sinhala", year: 1956, poster: "posters/movies/rekava-1956.jpg" },
        { title: "Nidhanaya", lang: "Sinhala", year: 1972, poster: "posters/movies/nidhanaya-1972.jpg" },
        { title: "Samanala Thatu", lang: "Sinhala", year: 2005, poster: "posters/movies/samanala-thatu-2005.jpg" },
        { title: "The Forsaken Land", lang: "Sinhala", year: 2005, poster: "posters/movies/the-forsaken-land-2005.jpg" },
        { title: "Siri Parakum", lang: "Sinhala", year: 2013, poster: "posters/movies/siri-parakum-2013.jpg" },
        { title: "Ahelepola Kumarihami", lang: "Sinhala", year: 2014, poster: "posters/movies/ahelepola-kumarihami-2014.jpg" },
        { title: "Ho Gaana Pokuna", lang: "Sinhala", year: 2015, poster: "posters/movies/ho-gaana-pokuna-2015.jpg" },
        { title: "Aloko Udapadi", lang: "Sinhala", year: 2017, poster: "posters/movies/aloko-udapadi-2017.jpg" },
        { title: "Ginnen Upan Seethala", lang: "Sinhala", year: 2018, poster: "posters/movies/ginnen-upan-seethala-2018.jpg" },
        { title: "Gaadi", lang: "Sinhala", year: 2019, poster: "posters/movies/gaadi-2019.jpg" },
        { title: "The Spirit of the Beehive", lang: "Spanish", year: 1973, poster: "posters/movies/the-spirit-of-the-beehive-1973.jpg" },
        { title: "Open Your Eyes", lang: "Spanish", year: 1997, poster: "posters/movies/open-your-eyes-1997.jpg" },
        { title: "All About My Mother", lang: "Spanish", year: 1999, poster: "posters/movies/all-about-my-mother-1999.jpg" },
        { title: "Talk to Her", lang: "Spanish", year: 2002, poster: "posters/movies/talk-to-her-2002.jpg" },
        { title: "The Sea Inside", lang: "Spanish", year: 2004, poster: "posters/movies/the-sea-inside-2004.jpg" },
        { title: "Pan's Labyrinth", lang: "Spanish", year: 2006, poster: "posters/movies/pan-s-labyrinth-2006.jpg" },
        { title: "The Orphanage", lang: "Spanish", year: 2007, poster: "posters/movies/the-orphanage-2007.jpg" },
        { title: "The Secret in Their Eyes", lang: "Spanish", year: 2009, poster: "posters/movies/the-secret-in-their-eyes-2009.jpg" },
        { title: "Roma", lang: "Spanish", year: 2018, poster: "posters/movies/roma-2018.jpg" },
        { title: "Society of the Snow", lang: "Spanish", year: 2023, poster: "posters/movies/society-of-the-snow-2023.jpg" },
        { title: "The Seventh Seal", lang: "Swedish", year: 1957, poster: "posters/movies/the-seventh-seal-1957.jpg" },
        { title: "Wild Strawberries", lang: "Swedish", year: 1957, poster: "posters/movies/wild-strawberries-1957.jpg" },
        { title: "Persona", lang: "Swedish", year: 1966, poster: "posters/movies/persona-1966.jpg" },
        { title: "The Emigrants", lang: "Swedish", year: 1971, poster: "posters/movies/the-emigrants-1971.jpg" },
        { title: "Fanny and Alexander", lang: "Swedish", year: 1982, poster: "posters/movies/fanny-and-alexander-1982.jpg" },
        { title: "My Life as a Dog", lang: "Swedish", year: 1985, poster: "posters/movies/my-life-as-a-dog-1985.jpg" },
        { title: "Let the Right One In", lang: "Swedish", year: 2008, poster: "posters/movies/let-the-right-one-in-2008.jpg" },
        { title: "Force Majeure", lang: "Swedish", year: 2014, poster: "posters/movies/force-majeure-2014.jpg" },
        { title: "A Man Called Ove", lang: "Swedish", year: 2015, poster: "posters/movies/a-man-called-ove-2015.jpg" },
        { title: "The Square", lang: "Swedish", year: 2017, poster: "posters/movies/the-square-2017.jpg" },
        { title: "Fan Chan", lang: "Thai", year: 2003, poster: "posters/movies/fan-chan-2003.jpg" },
        { title: "Ong-Bak: Muay Thai Warrior", lang: "Thai", year: 2003, poster: "posters/movies/ong-bak-muay-thai-warrior-2003.jpg" },
        { title: "Shutter", lang: "Thai", year: 2004, poster: "posters/movies/shutter-2004.jpg" },
        { title: "The Love of Siam", lang: "Thai", year: 2007, poster: "posters/movies/the-love-of-siam-2007.jpg" },
        { title: "Uncle Boonmee Who Can Recall His Past Lives", lang: "Thai", year: 2010, poster: "posters/movies/uncle-boonmee-who-can-recall-his-past-lives-2010.jpg" },
        { title: "Pee Mak", lang: "Thai", year: 2013, poster: "posters/movies/pee-mak-2013.jpg" },
        { title: "The Teacher's Diary", lang: "Thai", year: 2014, poster: "posters/movies/the-teacher-s-diary-2014.jpg" },
        { title: "Bad Genius", lang: "Thai", year: 2017, poster: "posters/movies/bad-genius-2017.jpg" },
        { title: "The Medium", lang: "Thai", year: 2021, poster: "posters/movies/the-medium-2021.jpg" },
        { title: "How to Make Millions Before Grandma Dies", lang: "Thai", year: 2024, poster: "posters/movies/how-to-make-millions-before-grandma-dies-2024.jpg" },
        { title: "The Bandit", lang: "Turkish", year: 1996, poster: "posters/movies/the-bandit-1996.jpg" },
        { title: "Uzak", lang: "Turkish", year: 2002, poster: "posters/movies/uzak-2002.jpg" },
        { title: "Once Upon a Time in Anatolia", lang: "Turkish", year: 2011, poster: "posters/movies/once-upon-a-time-in-anatolia-2011.jpg" },
        { title: "The Butterfly's Dream", lang: "Turkish", year: 2013, poster: "posters/movies/the-butterfly-s-dream-2013.jpg" },
        { title: "Winter Sleep", lang: "Turkish", year: 2014, poster: "posters/movies/winter-sleep-2014.jpg" },
        { title: "Mustang", lang: "Turkish", year: 2015, poster: "posters/movies/mustang-2015.jpg" },
        { title: "Ayla: The Daughter of War", lang: "Turkish", year: 2017, poster: "posters/movies/ayla-the-daughter-of-war-2017.jpg" },
        { title: "The Wild Pear Tree", lang: "Turkish", year: 2018, poster: "posters/movies/the-wild-pear-tree-2018.jpg" },
        { title: "Miracle in Cell No. 7", lang: "Turkish", year: 2019, poster: "posters/movies/miracle-in-cell-no-7-2019.jpg" },
        { title: "Burning Days", lang: "Turkish", year: 2022, poster: "posters/movies/burning-days-2022.jpg" },
        { title: "The Earth", lang: "Ukrainian", year: 1930, poster: "posters/movies/the-earth-1930.jpg" },
        { title: "Shadows of Forgotten Ancestors", lang: "Ukrainian", year: 1965, poster: "posters/movies/shadows-of-forgotten-ancestors-1965.jpg" },
        { title: "The Guide", lang: "Ukrainian", year: 2014, poster: "posters/movies/the-guide-2014.jpg" },
        { title: "The Tribe", lang: "Ukrainian", year: 2014, poster: "posters/movies/the-tribe-2014.jpg" },
        { title: "Donbass", lang: "Ukrainian", year: 2018, poster: "posters/movies/donbass-2018.jpg" },
        { title: "Atlantis", lang: "Ukrainian", year: 2019, poster: "posters/movies/atlantis-2019.jpg" },
        { title: "My Thoughts Are Silent", lang: "Ukrainian", year: 2019, poster: "posters/movies/my-thoughts-are-silent-2019.jpg" },
        { title: "Stop-Zemlia", lang: "Ukrainian", year: 2021, poster: "posters/movies/stop-zemlia-2021.jpg" },
        { title: "Pamfir", lang: "Ukrainian", year: 2022, poster: "posters/movies/pamfir-2022.jpg" },
        { title: "20 Days in Mariupol", lang: "Ukrainian", year: 2023, poster: "posters/movies/20-days-in-mariupol-2023.jpg" },
        { title: "Khuda Kay Liye", lang: "Urdu", year: 2007, poster: "posters/movies/khuda-kay-liye-2007.jpg" },
        { title: "Bol", lang: "Urdu", year: 2011, poster: "posters/movies/bol-2011.jpg" },
        { title: "Teri Meri Kahaani", lang: "Urdu", year: 2012, poster: "posters/movies/teri-meri-kahaani-2012.jpg" },
        { title: "Waar", lang: "Urdu", year: 2013, poster: "posters/movies/waar-2013.jpg" },
        { title: "Zinda Bhaag", lang: "Urdu", year: 2013, poster: "posters/movies/zinda-bhaag-2013.jpg" },
        { title: "Cake", lang: "Urdu", year: 2018, poster: "posters/movies/cake-2018.jpg" },
        { title: "Manto", lang: "Urdu", year: 2018, poster: "posters/movies/manto-2018.jpg" },
        { title: "Laal Kabootar", lang: "Urdu", year: 2019, poster: "posters/movies/laal-kabootar-2019.jpg" },
        { title: "Joyland", lang: "Urdu", year: 2022, poster: "posters/movies/joyland-2022.jpg" },
        { title: "The Legend of Maula Jatt", lang: "Urdu", year: 2022, poster: "posters/movies/the-legend-of-maula-jatt-2022.jpg" },
        { title: "The Scent of Green Papaya", lang: "Vietnamese", year: 1993, poster: "posters/movies/the-scent-of-green-papaya-1993.jpg" },
        { title: "Cyclo", lang: "Vietnamese", year: 1995, poster: "posters/movies/cyclo-1995.jpg" },
        { title: "The Floating Lives", lang: "Vietnamese", year: 2010, poster: "posters/movies/the-floating-lives-2010.jpg" },
        { title: "Yellow Flowers on the Green Grass", lang: "Vietnamese", year: 2015, poster: "posters/movies/yellow-flowers-on-the-green-grass-2015.jpg" },
        { title: "The Tailor", lang: "Vietnamese", year: 2017, poster: "posters/movies/the-tailor-2017.jpg" },
        { title: "Song Lang", lang: "Vietnamese", year: 2018, poster: "posters/movies/song-lang-2018.jpg" },
        { title: "The Third Wife", lang: "Vietnamese", year: 2018, poster: "posters/movies/the-third-wife-2018.jpg" },
        { title: "Dreamy Eyes", lang: "Vietnamese", year: 2019, poster: "posters/movies/dreamy-eyes-2019.jpg" },
        { title: "Furie", lang: "Vietnamese", year: 2019, poster: "posters/movies/furie-2019.jpg" },
        { title: "Inside the Yellow Cocoon Shell", lang: "Vietnamese", year: 2023, poster: "posters/movies/inside-the-yellow-cocoon-shell-2023.jpg" },
        { title: "The Corn Is Green", lang: "Welsh", year: 1945, poster: "posters/movies/the-corn-is-green-1945.jpg" },
        { title: "The Last Days of Dolwyn", lang: "Welsh", year: 1949, poster: "posters/movies/the-last-days-of-dolwyn-1949.jpg" },
        { title: "Hedd Wyn", lang: "Welsh", year: 1992, poster: "posters/movies/hedd-wyn-1992.jpg" },
        { title: "The Englishman Who Went Up a Hill but Came Down a Mountain", lang: "Welsh", year: 1995, poster: "posters/movies/the-englishman-who-went-up-a-hill-but-came-down-a-mountain-1995.jpg" },
        { title: "Twin Town", lang: "Welsh", year: 1997, poster: "posters/movies/twin-town-1997.jpg" },
        { title: "Solomon & Gaenor", lang: "Welsh", year: 1999, poster: "posters/movies/solomon-gaenor-1999.jpg" },
        { title: "Patagonia", lang: "Welsh", year: 2010, poster: "posters/movies/patagonia-2010.jpg" },
        { title: "Submarine", lang: "Welsh", year: 2010, poster: "posters/movies/submarine-2010.jpg" },
        { title: "Pride", lang: "Welsh", year: 2014, poster: "posters/movies/pride-2014.jpg" },
        { title: "Y Llyfrgell", lang: "Welsh", year: 2016, poster: "posters/movies/y-llyfrgell-2016.jpg" },
        { title: "Interstellar", lang: "English", year: 2014, poster: "posters/movies/interstellar-2014.jpg", director: "Christopher Nolan", cast: "Matthew McConaughey", rating: 8.7 },
        { title: "The Matrix", lang: "English", year: 1999, poster: "posters/movies/the-matrix-1999.jpg", director: "Lana & Lilly Wachowski", cast: "Keanu Reeves", rating: 8.7 },
        { title: "The Lord of the Rings: Return of the King", lang: "English", year: 2003, poster: "posters/movies/the-lord-of-the-rings-return-of-the-king-2003.jpg", director: "Peter Jackson", cast: "Elijah Wood", rating: 9.0 },
        { title: "Avatar", lang: "English", year: 2009, poster: "posters/movies/avatar-2009.jpg", director: "James Cameron", cast: "Sam Worthington", rating: 7.9 },
        { title: "Star Wars: Episode V - Empire Strikes Back", lang: "English", year: 1980, poster: "posters/movies/star-wars-episode-v-empire-strikes-back-1980.jpg", director: "Irvin Kershner", cast: "Mark Hamill", rating: 8.7 },
        { title: "Dune: Part Two", lang: "English", year: 2024, poster: "posters/movies/dune-part-two-2024.jpg", director: "Denis Villeneuve", cast: "Timothée Chalamet", rating: 8.6 },
        { title: "Jurassic Park", lang: "English", year: 1993, poster: "posters/movies/jurassic-park-1993.jpg", director: "Steven Spielberg", cast: "Sam Neill", rating: 8.2 },
        { title: "Spider-Man: Into the Spider-Verse", lang: "English", year: 2018, poster: "posters/movies/spider-man-into-the-spider-verse-2018.jpg", director: "Bob Persichetti", cast: "Shameik Moore", rating: 8.4 },
        { title: "Gladiator", lang: "English", year: 2000, poster: "posters/movies/gladiator-2000.jpg", director: "Ridley Scott", cast: "Russell Crowe", rating: 8.5 },
        { title: "Avengers: Endgame", lang: "English", year: 2019, poster: "posters/movies/avengers-endgame-2019.jpg", director: "Anthony & Joe Russo", cast: "Robert Downey Jr.", rating: 8.4 },
        { title: "Mad Max: Fury Road", lang: "English", year: 2015, poster: "posters/movies/mad-max-fury-road-2015.jpg", director: "George Miller", cast: "Tom Hardy", rating: 8.1 },
        { title: "Top Gun: Maverick", lang: "English", year: 2022, poster: "posters/movies/top-gun-maverick-2022.jpg", director: "Joseph Kosinski", cast: "Tom Cruise", rating: 8.3 },
        { title: "John Wick", lang: "English", year: 2014, poster: "posters/movies/john-wick-2014.jpg", director: "Chad Stahelski", cast: "Keanu Reeves", rating: 7.4 },
        { title: "Terminator 2: Judgment Day", lang: "English", year: 1991, poster: "posters/movies/terminator-2-judgment-day-1991.jpg", director: "James Cameron", cast: "Arnold Schwarzenegger", rating: 8.6 },
        { title: "Raiders of the Lost Ark", lang: "English", year: 1981, poster: "posters/movies/raiders-of-the-lost-ark-1981.jpg", director: "Steven Spielberg", cast: "Harrison Ford", rating: 8.4 },
        { title: "Die Hard", lang: "English", year: 1988, poster: "posters/movies/die-hard-1988.jpg", director: "John McTiernan", cast: "Bruce Willis", rating: 8.2 },
        { title: "Mission: Impossible - Fallout", lang: "English", year: 2018, poster: "posters/movies/mission-impossible-fallout-2018.jpg", director: "Christopher McQuarrie", cast: "Tom Cruise", rating: 7.7 },
        { title: "Casino Royale", lang: "English", year: 2006, poster: "posters/movies/casino-royale-2006.jpg", director: "Martin Campbell", cast: "Daniel Craig", rating: 8.0 },
        { title: "Fight Club", lang: "English", year: 1999, poster: "posters/movies/fight-club-1999.jpg", director: "David Fincher", cast: "Brad Pitt", rating: 8.8 },
        { title: "12 Angry Men", lang: "English", year: 1957, poster: "posters/movies/12-angry-men-1957.jpg", director: "Sidney Lumet", cast: "Henry Fonda", rating: 9.0 },
        { title: "The Green Mile", lang: "English", year: 1999, poster: "posters/movies/the-green-mile-1999.jpg", director: "Frank Darabont", cast: "Tom Hanks", rating: 8.6 },
        { title: "Se7en", lang: "English", year: 1995, poster: "posters/movies/se7en-1995.jpg", director: "David Fincher", cast: "Morgan Freeman", rating: 8.6 },
        { title: "The Silence of the Lambs", lang: "English", year: 1991, poster: "posters/movies/the-silence-of-the-lambs-1991.jpg", director: "Jonathan Demme", cast: "Jodie Foster", rating: 8.6 },
        { title: "The Prestige", lang: "English", year: 2006, poster: "posters/movies/the-prestige-2006.jpg", director: "Christopher Nolan", cast: "Christian Bale", rating: 8.5 },
        { title: "Shutter Island", lang: "English", year: 2010, poster: "posters/movies/shutter-island-2010.jpg", director: "Martin Scorsese", cast: "Leonardo DiCaprio", rating: 8.2 },
        { title: "The Departed", lang: "English", year: 2006, poster: "posters/movies/the-departed-2006.jpg", director: "Martin Scorsese", cast: "Leonardo DiCaprio", rating: 8.5 },
        { title: "Memento", lang: "English", year: 2000, poster: "posters/movies/memento-2000.jpg", director: "Christopher Nolan", cast: "Guy Pearce", rating: 8.4 },
        { title: "Psycho", lang: "English", year: 1960, poster: "posters/movies/psycho-1960.jpg", director: "Alfred Hitchcock", cast: "Anthony Perkins", rating: 8.5 },
        { title: "Gone Girl", lang: "English", year: 2014, poster: "posters/movies/gone-girl-2014.jpg", director: "David Fincher", cast: "Ben Affleck", rating: 8.1 },
        { title: "Zodiac", lang: "English", year: 2007, poster: "posters/movies/zodiac-2007.jpg", director: "David Fincher", cast: "Jake Gyllenhaal", rating: 7.7 },
        { title: "Prisoners", lang: "English", year: 2013, poster: "posters/movies/prisoners-2013.jpg", director: "Denis Villeneuve", cast: "Hugh Jackman", rating: 8.1 },
        { title: "The Lion King", lang: "English", year: 1994, poster: "posters/movies/the-lion-king-1994.jpg", director: "Roger Allers, Rob Minkoff", studio: "Disney", rating: 8.5 },
        { title: "Toy Story", lang: "English", year: 1995, poster: "posters/movies/toy-story-1995.jpg", director: "John Lasseter", studio: "Pixar / Disney", rating: 8.3 },
        { title: "WALL-E", lang: "English", year: 2008, poster: "posters/movies/wall-e-2008.jpg", director: "Andrew Stanton", studio: "Pixar", rating: 8.4 },
        { title: "Coco", lang: "English", year: 2017, poster: "posters/movies/coco-2017.jpg", director: "Lee Unkrich", studio: "Pixar", rating: 8.4 },
        { title: "Up", lang: "English", year: 2009, poster: "posters/movies/up-2009.jpg", director: "Pete Docter", studio: "Pixar", rating: 8.3 },
        { title: "Finding Nemo", lang: "English", year: 2003, poster: "posters/movies/finding-nemo-2003.jpg", director: "Andrew Stanton", studio: "Pixar", rating: 8.2 },
        { title: "Spider-Man: Across the Spider-Verse", lang: "English", year: 2023, poster: "posters/movies/spider-man-across-the-spider-verse-2023.jpg", director: "Joaquim Dos Santos", studio: "Sony Animation", rating: 8.6 },
        { title: "Inside Out", lang: "English", year: 2015, poster: "posters/movies/inside-out-2015.jpg", director: "Pete Docter", studio: "Pixar", rating: 8.1 },
        { title: "Shrek", lang: "English", year: 2001, poster: "posters/movies/shrek-2001.jpg", director: "Andrew Adamson", studio: "DreamWorks", rating: 7.9 }
    ],
    games: [
        { title: "Grand Theft Auto V", kind: "Action / Adventure", poster: "posters/games/grand-theft-auto-v.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Red Dead Redemption 2", kind: "Action / Adventure", poster: "posters/games/red-dead-redemption-2.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Marvel’s Spider-Man Remastered", kind: "Action / Adventure", poster: "posters/games/marvels-spider-man-remastered.jpg", platforms: "PC, PlayStation" },
        { title: "God of War (2018)", kind: "Action / Adventure", poster: "posters/games/god-of-war-2018.jpg", platforms: "PC, PlayStation" },
        { title: "God of War Ragnarök", kind: "Action / Adventure", poster: "posters/games/god-of-war-ragnarok.jpg", platforms: "PC, PlayStation" },
        { title: "Ghost of Tsushima", kind: "Action / Adventure", poster: "posters/games/ghost-of-tsushima.jpg", platforms: "PC, PlayStation" },
        { title: "Uncharted 4: A Thief’s End", kind: "Action / Adventure", poster: "posters/games/uncharted-4-a-thiefs-end.jpg", platforms: "PC, PlayStation" },
        { title: "Horizon Zero Dawn", kind: "Action / Adventure", poster: "posters/games/horizon-zero-dawn.jpg", platforms: "PC, PlayStation" },
        { title: "Horizon Forbidden West", kind: "Action / Adventure", poster: "posters/games/horizon-forbidden-west.jpg", platforms: "PC, PlayStation" },
        { title: "Assassin’s Creed Valhalla", kind: "Action / Adventure", poster: "posters/games/assassins-creed-valhalla.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Batman: Arkham Knight", kind: "Action / Adventure", poster: "posters/games/batman-arkham-knight.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Tomb Raider (2013)", kind: "Action / Adventure", poster: "posters/games/tomb-raider-2013.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "The Last of Us Part I", kind: "Action / Adventure", poster: "posters/games/the-last-of-us-part-i.jpg", platforms: "PC, PlayStation" },
        { title: "Sekiro: Shadows Die Twice", kind: "Action / Adventure", poster: "posters/games/sekiro-shadows-die-twice.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Elden Ring", kind: "Action / Adventure", poster: "posters/games/elden-ring.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "The Witcher 3: Wild Hunt", kind: "Role-Playing (RPG)", poster: "posters/games/the-witcher-3-wild-hunt.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "Cyberpunk 2077", kind: "Role-Playing (RPG)", poster: "posters/games/cyberpunk-2077.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Baldur’s Gate 3", kind: "Role-Playing (RPG)", poster: "posters/games/baldurs-gate-3.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Final Fantasy VII Remake Intergrade", kind: "Role-Playing (RPG)", poster: "posters/games/final-fantasy-vii-remake-intergrade.jpg", platforms: "PC, PlayStation" },
        { title: "Persona 5 Royal", kind: "Role-Playing (RPG)", poster: "posters/games/persona-5-royal.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "Dragon Quest XI S", kind: "Role-Playing (RPG)", poster: "posters/games/dragon-quest-xi-s.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "Hogwarts Legacy", kind: "Role-Playing (RPG)", poster: "posters/games/hogwarts-legacy.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "Monster Hunter: World", kind: "Role-Playing (RPG)", poster: "posters/games/monster-hunter-world.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Stardew Valley", kind: "Role-Playing (RPG)", poster: "posters/games/stardew-valley.jpg", platforms: "PC, PlayStation, Xbox, Switch, Mobile" },
        { title: "Genshin Impact", kind: "Role-Playing (RPG)", poster: "posters/games/genshin-impact.jpg", platforms: "PC, PlayStation, Mobile" },
        { title: "Counter-Strike 2", kind: "Shooter", poster: "posters/games/counter-strike-2.jpg", platforms: "PC" },
        { title: "Valorant", kind: "Shooter", poster: "posters/games/valorant.jpg", platforms: "PC" },
        { title: "Call of Duty: Modern Warfare III", kind: "Shooter", poster: "posters/games/call-of-duty-modern-warfare-iii.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Call of Duty: Warzone", kind: "Shooter", poster: "posters/games/call-of-duty-warzone.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Apex Legends", kind: "Shooter", poster: "posters/games/apex-legends.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "Fortnite", kind: "Shooter", poster: "posters/games/fortnite.jpg", platforms: "PC, PlayStation, Xbox, Switch, Mobile" },
        { title: "Overwatch 2", kind: "Shooter", poster: "posters/games/overwatch-2.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "PUBG: Battlegrounds", kind: "Shooter", poster: "posters/games/pubg-battlegrounds.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Rainbow Six Siege", kind: "Shooter", poster: "posters/games/rainbow-six-siege.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "DOOM Eternal", kind: "Shooter", poster: "posters/games/doom-eternal.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "eFootball", kind: "Sports", poster: "posters/games/efootball.jpg", platforms: "PC, PlayStation, Xbox, Mobile" },
        { title: "EA Sports FC 26", kind: "Sports", poster: "posters/games/ea-sports-fc-26.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "NBA 2K26", kind: "Sports", poster: "posters/games/nba-2k26.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "Rocket League", kind: "Sports", poster: "posters/games/rocket-league.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "WWE 2K25", kind: "Sports", poster: "posters/games/wwe-2k25.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Forza Horizon 5", kind: "Racing", poster: "posters/games/forza-horizon-5.jpg", platforms: "PC, Xbox, PlayStation" },
        { title: "Gran Turismo 7", kind: "Racing", poster: "posters/games/gran-turismo-7.jpg", platforms: "PlayStation" },
        { title: "Need for Speed Unbound", kind: "Racing", poster: "posters/games/need-for-speed-unbound.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "The Crew Motorfest", kind: "Racing", poster: "posters/games/the-crew-motorfest.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Mario Kart 8 Deluxe", kind: "Racing", poster: "posters/games/mario-kart-8-deluxe.jpg", platforms: "Nintendo Switch" },
        { title: "Minecraft", kind: "Survival / Sandbox", poster: "posters/games/minecraft.jpg", platforms: "PC, Console, Mobile" },
        { title: "Terraria", kind: "Survival / Sandbox", poster: "posters/games/terraria.jpg", platforms: "PC, Console, Mobile" },
        { title: "Palworld", kind: "Survival / Sandbox", poster: "posters/games/palworld.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "ARK: Survival Evolved", kind: "Survival / Sandbox", poster: "posters/games/ark-survival-evolved.jpg", platforms: "PC, PlayStation, Xbox, Switch, Mobile" },
        { title: "Subnautica", kind: "Survival / Sandbox", poster: "posters/games/subnautica.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "The Sims 4", kind: "Strategy / Simulation", poster: "posters/games/the-sims-4.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Age of Empires IV", kind: "Strategy / Simulation", poster: "posters/games/age-of-empires-iv.jpg", platforms: "PC, Xbox" },
        { title: "Civilization VI", kind: "Strategy / Simulation", poster: "posters/games/civilization-vi.jpg", platforms: "PC, PlayStation, Xbox, Switch, Mobile" },
        { title: "Cities: Skylines", kind: "Strategy / Simulation", poster: "posters/games/cities-skylines.jpg", platforms: "PC, PlayStation, Xbox" },
        { title: "Football Manager 2024", kind: "Strategy / Simulation", poster: "posters/games/football-manager-2024.jpg", platforms: "PC, Console, Mobile" },
        { title: "Hades", kind: "Indie / Puzzle", poster: "posters/games/hades.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "Hollow Knight", kind: "Indie / Puzzle", poster: "posters/games/hollow-knight.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "Celeste", kind: "Indie / Puzzle", poster: "posters/games/celeste.jpg", platforms: "PC, PlayStation, Xbox, Switch" },
        { title: "Among Us", kind: "Indie / Puzzle", poster: "posters/games/among-us.jpg", platforms: "PC, Console, Mobile" },
        { title: "Fall Guys", kind: "Indie / Puzzle", poster: "posters/games/fall-guys.jpg", platforms: "PC, PlayStation, Xbox, Switch" }
    ],
    series: [
        { title: "Breaking Bad", genre: "Crime drama", years: "2008-2013", poster: "posters/series/breaking-bad.jpg" },
        { title: "Planet Earth II", genre: "Nature documentary", years: "2016", poster: "posters/series/planet-earth-ii.jpg" },
        { title: "Planet Earth", genre: "Nature documentary", years: "2006", poster: "posters/series/planet-earth.jpg" },
        { title: "Band of Brothers", genre: "War drama / miniseries", years: "2001", poster: "posters/series/band-of-brothers.jpg" },
        { title: "Chernobyl", genre: "Historical drama / miniseries", years: "2019", poster: "posters/series/chernobyl.jpg" },
        { title: "Avatar: The Last Airbender", genre: "Animated fantasy", years: "2005-2008", poster: "posters/series/avatar-the-last-airbender.jpg" },
        { title: "The Wire", genre: "Crime drama", years: "2002-2008", poster: "posters/series/the-wire.jpg" },
        { title: "The Sopranos", genre: "Crime drama", years: "1999-2007", poster: "posters/series/the-sopranos.jpg" },
        { title: "Blue Planet II", genre: "Nature documentary", years: "2017", poster: "posters/series/blue-planet-ii.jpg" },
        { title: "Cosmos: A Spacetime Odyssey", genre: "Science documentary", years: "2014", poster: "posters/series/cosmos-a-spacetime-odyssey.jpg" },
        { title: "Our Planet", genre: "Nature documentary", years: "2019-2023", poster: "posters/series/our-planet.jpg" },
        { title: "Game of Thrones", genre: "Fantasy drama", years: "2011-2019", poster: "posters/series/game-of-thrones.jpg" },
        { title: "Sherlock", genre: "Mystery / crime", years: "2010-2017", poster: "posters/series/sherlock.jpg" },
        { title: "Better Call Saul", genre: "Crime drama", years: "2015-2022", poster: "posters/series/better-call-saul.jpg" },
        { title: "The Office (US)", genre: "Comedy", years: "2005-2013", poster: "posters/series/the-office-us.jpg" },
        { title: "Stranger Things", genre: "Sci-fi / mystery", years: "2016-2025", poster: "posters/series/stranger-things.jpg" },
        { title: "Succession", genre: "Drama", years: "2018-2023", poster: "posters/series/succession.jpg" },
        { title: "The Last of Us", genre: "Post-apocalyptic drama", years: "2023-", poster: "posters/series/the-last-of-us.jpg" },
        { title: "Severance", genre: "Sci-fi thriller", years: "2022-", poster: "posters/series/severance.jpg" },
        { title: "Fargo", genre: "Crime anthology", years: "2014-", poster: "posters/series/fargo.jpg" },
        { title: "Mad Men", genre: "Period drama", years: "2007-2015", poster: "posters/series/mad-men.jpg" },
        { title: "The Twilight Zone", genre: "Sci-fi anthology", years: "1959-1964", poster: "posters/series/the-twilight-zone.jpg" },
        { title: "The World at War", genre: "History documentary", years: "1973-1974", poster: "posters/series/the-world-at-war.jpg" },
        { title: "Fullmetal Alchemist: Brotherhood", genre: "Anime / fantasy", years: "2009-2010", poster: "posters/series/fullmetal-alchemist-brotherhood.jpg" },
        { title: "Attack on Titan", genre: "Anime / action fantasy", years: "2013-2023", poster: "posters/series/attack-on-titan.jpg" },
        { title: "The Mandalorian", genre: "Sci-fi / adventure", years: "2019-", poster: "posters/series/the-mandalorian.jpg" },
        { title: "The Crown", genre: "Historical drama", years: "2016-2023", poster: "posters/series/the-crown.jpg" },
        { title: "Dark", genre: "German sci-fi mystery", years: "2017-2020", poster: "posters/series/dark.jpg" },
        { title: "The Queen's Gambit", genre: "Drama / miniseries", years: "2020", poster: "posters/series/the-queen-s-gambit.jpg" },
        { title: "Peaky Blinders", genre: "Crime drama", years: "2013-2022", poster: "posters/series/peaky-blinders.jpg" },
        { title: "The Americans", genre: "Spy drama", years: "2013-2018", poster: "posters/series/the-americans.jpg" },
        { title: "Lost", genre: "Mystery / adventure", years: "2004-2010", poster: "posters/series/lost.jpg" },
        { title: "The X-Files", genre: "Sci-fi / mystery", years: "1993-2018", poster: "posters/series/the-x-files.jpg" },
        { title: "Friends", genre: "Sitcom", years: "1994-2004", poster: "posters/series/friends.jpg" },
        { title: "Seinfeld", genre: "Sitcom", years: "1989-1998", poster: "posters/series/seinfeld.jpg" },
        { title: "Parks and Recreation", genre: "Comedy", years: "2009-2015", poster: "posters/series/parks-and-recreation.jpg" },
        { title: "Brooklyn Nine-Nine", genre: "Comedy / police", years: "2013-2021", poster: "posters/series/brooklyn-nine-nine.jpg" },
        { title: "The Good Place", genre: "Fantasy comedy", years: "2016-2020", poster: "posters/series/the-good-place.jpg" },
        { title: "Black Mirror", genre: "Sci-fi anthology", years: "2011-", poster: "posters/series/black-mirror.jpg" },
        { title: "Doctor Who", genre: "Sci-fi adventure", years: "1963-", poster: "posters/series/doctor-who.jpg" },
        { title: "The Boys", genre: "Superhero satire", years: "2019-", poster: "posters/series/the-boys.jpg" },
        { title: "Invincible", genre: "Animated superhero", years: "2021-", poster: "posters/series/invincible.jpg" },
        { title: "Arcane", genre: "Animated fantasy", years: "2021-2024", poster: "posters/series/arcane.jpg" },
        { title: "Bluey", genre: "Family animation", years: "2018-", poster: "posters/series/bluey.jpg" },
        { title: "The Simpsons", genre: "Animated comedy", years: "1989-", poster: "posters/series/the-simpsons.jpg" },
        { title: "Rick and Morty", genre: "Animated sci-fi comedy", years: "2013-", poster: "posters/series/rick-and-morty.jpg" },
        { title: "The Last Dance", genre: "Sports documentary", years: "2020", poster: "posters/series/the-last-dance.jpg" },
        { title: "Formula 1: Drive to Survive", genre: "Sports documentary", years: "2019-", poster: "posters/series/formula-1-drive-to-survive.jpg" },
        { title: "Planet Earth III", genre: "Nature documentary", years: "2023", poster: "posters/series/planet-earth-iii.jpg" },
        { title: "Life", genre: "Nature documentary", years: "2009", poster: "posters/series/life.jpg" },
        { title: "Blue Planet", genre: "Nature documentary", years: "2001", poster: "posters/series/blue-planet.jpg" },
        { title: "Cosmos", genre: "Science documentary", years: "1980", poster: "posters/series/cosmos.jpg" },
        { title: "The Vietnam War", genre: "History documentary", years: "2017", poster: "posters/series/the-vietnam-war.jpg" },
        { title: "The Civil War", genre: "History documentary", years: "1990", poster: "posters/series/the-civil-war.jpg" },
        { title: "Rome", genre: "Historical drama", years: "2005-2007", poster: "posters/series/rome.jpg" },
        { title: "Deadwood", genre: "Western drama", years: "2004-2006", poster: "posters/series/deadwood.jpg" },
        { title: "The Leftovers", genre: "Drama / mystery", years: "2014-2017", poster: "posters/series/the-leftovers.jpg" },
        { title: "Six Feet Under", genre: "Family drama", years: "2001-2005", poster: "posters/series/six-feet-under.jpg" },
        { title: "Friday Night Lights", genre: "Sports drama", years: "2006-2011", poster: "posters/series/friday-night-lights.jpg" },
        { title: "The West Wing", genre: "Political drama", years: "1999-2006", poster: "posters/series/the-west-wing.jpg" },
        { title: "The Bear", genre: "Comedy-drama", years: "2022-", poster: "posters/series/the-bear.jpg" },
        { title: "Ted Lasso", genre: "Sports comedy-drama", years: "2020-2023", poster: "posters/series/ted-lasso.jpg" },
        { title: "Andor", genre: "Sci-fi / political drama", years: "2022-", poster: "posters/series/andor.jpg" },
        { title: "The Expanse", genre: "Sci-fi", years: "2015-2022", poster: "posters/series/the-expanse.jpg" },
        { title: "Battlestar Galactica", genre: "Sci-fi", years: "2004-2009", poster: "posters/series/battlestar-galactica.jpg" },
        { title: "Twin Peaks", genre: "Mystery / drama", years: "1990-1991", poster: "posters/series/twin-peaks.jpg" },
        { title: "House", genre: "Medical drama", years: "2004-2012", poster: "posters/series/house.jpg" },
        { title: "Mindhunter", genre: "Crime / psychological drama", years: "2017-2019", poster: "posters/series/mindhunter.jpg" },
        { title: "Narcos", genre: "Crime drama", years: "2015-2017", poster: "posters/series/narcos.jpg" },
        { title: "The Haunting of Hill House", genre: "Horror drama", years: "2018", poster: "posters/series/the-haunting-of-hill-house.jpg" },
        { title: "The Handmaid's Tale", genre: "Dystopian drama", years: "2017-2025", poster: "posters/series/the-handmaid-s-tale.jpg" },
        { title: "The Marvelous Mrs. Maisel", genre: "Comedy-drama", years: "2017-2023", poster: "posters/series/the-marvelous-mrs-maisel.jpg" },
        { title: "The IT Crowd", genre: "Sitcom", years: "2006-2013", poster: "posters/series/the-it-crowd.jpg" },
        { title: "Arrested Development", genre: "Comedy", years: "2003-2019", poster: "posters/series/arrested-development.jpg" },
        { title: "Community", genre: "Comedy", years: "2009-2015", poster: "posters/series/community.jpg" },
        { title: "What We Do in the Shadows", genre: "Comedy / fantasy", years: "2019-2024", poster: "posters/series/what-we-do-in-the-shadows.jpg" },
        { title: "Luther", genre: "Crime thriller", years: "2010-2019", poster: "posters/series/luther.jpg" },
        { title: "Line of Duty", genre: "Police thriller", years: "2012-2021", poster: "posters/series/line-of-duty.jpg" },
        { title: "The Bridge (Bron/Broen)", genre: "Nordic crime", years: "2011-2018", poster: "posters/series/the-bridge-bron-broen.jpg" },
        { title: "Shogun", genre: "Historical drama", years: "2024-", poster: "posters/series/shogun.jpg" }
    ],
    anime: [
        { title: "Attack on Titan", alt: "Shingeki no Kyojin", kind: 'Series', poster: "posters/anime/attack-on-titan.jpg", studio: "Wit Studio / MAPPA", genre: "Dark Fantasy, Action", rating: 9.0 },
        { title: "Fullmetal Alchemist: Brotherhood", kind: 'Series', poster: "posters/anime/fullmetal-alchemist-brotherhood.jpg", studio: "Bones", genre: "Adventure, Fantasy", rating: 9.1 },
        { title: "One Piece", kind: 'Series', poster: "posters/anime/one-piece.jpg", studio: "Toei Animation", genre: "Action, Adventure", rating: 8.9 },
        { title: "Naruto Shippuden", kind: 'Series', poster: "posters/anime/naruto-shippuden.jpg", studio: "Studio Pierrot", genre: "Martial Arts, Action", rating: 8.7 },
        { title: "Demon Slayer", alt: "Kimetsu no Yaiba", kind: 'Series', poster: "posters/anime/demon-slayer.jpg", studio: "Ufotable", genre: "Dark Fantasy, Action", rating: 8.6 },
        { title: "Jujutsu Kaisen", kind: 'Series', poster: "posters/anime/jujutsu-kaisen.jpg", studio: "MAPPA", genre: "Supernatural, Action", rating: 8.6 },
        { title: "Hunter x Hunter (2011)", kind: 'Series', poster: "posters/anime/hunter-x-hunter-2011.jpg", studio: "Madhouse", genre: "Action, Adventure", rating: 9.0 },
        { title: "Dragon Ball Z", kind: 'Series', poster: "posters/anime/dragon-ball-z.jpg", studio: "Toei Animation", genre: "Action, Martial Arts", rating: 8.8 },
        { title: "Bleach / Thousand-Year Blood War", kind: 'Series', poster: "posters/anime/bleach-thousand-year-blood-war.jpg", studio: "Studio Pierrot", genre: "Supernatural, Action", rating: 8.2 },
        { title: "My Hero Academia", kind: 'Series', poster: "posters/anime/my-hero-academia.jpg", studio: "Bones", genre: "Superhero, Action", rating: 8.3 },
        { title: "Death Note", kind: 'Series', poster: "posters/anime/death-note.jpg", studio: "Madhouse", genre: "Psychological Thriller", rating: 8.9 },
        { title: "Steins;Gate", kind: 'Series', poster: "posters/anime/steins-gate.jpg", studio: "White Fox", genre: "Sci-Fi, Time Travel", rating: 9.1 },
        { title: "Monster", kind: 'Series', poster: "posters/anime/monster.jpg", studio: "Madhouse", genre: "Crime Thriller, Mystery", rating: 8.7 },
        { title: "Code Geass: Lelouch of the Rebellion", kind: 'Series', poster: "posters/anime/code-geass-lelouch-of-the-rebellion.jpg", studio: "Sunrise", genre: "Mecha, Military Thriller", rating: 8.7 },
        { title: "Vinland Saga", kind: 'Series', poster: "posters/anime/vinland-saga.jpg", studio: "Wit Studio / MAPPA", genre: "Historical, Drama", rating: 8.8 },
        { title: "Parasyte: The Maxim", kind: 'Series', poster: "posters/anime/parasyte-the-maxim.jpg", studio: "Madhouse", genre: "Sci-Fi, Horror", rating: 8.3 },
        { title: "Neon Genesis Evangelion", kind: 'Series', poster: "posters/anime/neon-genesis-evangelion.jpg", studio: "Gainax", genre: "Mecha, Psychological", rating: 8.5 },
        { title: "Erased", alt: "Boku dake ga Inai Machi", kind: 'Series', poster: "posters/anime/erased.jpg", studio: "A-1 Pictures", genre: "Mystery, Supernatural", rating: 8.5 },
        { title: "Tokyo Ghoul", kind: 'Series', poster: "posters/anime/tokyo-ghoul.jpg", studio: "Studio Pierrot", genre: "Dark Fantasy, Horror", rating: 7.7 },
        { title: "Psycho-Pass", kind: 'Series', poster: "posters/anime/psycho-pass.jpg", studio: "Production I.G", genre: "Cyberpunk, Sci-Fi", rating: 8.2 },
        { title: "Frieren: Beyond Journey's End", kind: 'Series', poster: "posters/anime/frieren-beyond-journey-s-end.jpg", studio: "Madhouse", genre: "Fantasy, Drama", rating: 8.9 },
        { title: "Violet Evergarden", kind: 'Series', poster: "posters/anime/violet-evergarden.jpg", studio: "Kyoto Animation", genre: "Drama, Slice of Life", rating: 8.4 },
        { title: "Your Lie in April", alt: "Shigatsu wa Kimi no Uso", kind: 'Series', poster: "posters/anime/your-lie-in-april.jpg", studio: "A-1 Pictures", genre: "Music, Romance, Drama", rating: 8.6 },
        { title: "Haikyu!!", kind: 'Series', poster: "posters/anime/haikyu.jpg", studio: "Production I.G", genre: "Sports, Comedy", rating: 8.7 },
        { title: "Spy x Family", kind: 'Series', poster: "posters/anime/spy-x-family.jpg", studio: "Wit Studio / CloverWorks", genre: "Comedy, Action", rating: 8.3 },
        { title: "Mob Psycho 100", kind: 'Series', poster: "posters/anime/mob-psycho-100.jpg", studio: "Bones", genre: "Supernatural, Comedy", rating: 8.6 },
        { title: "One Punch Man", kind: 'Series', poster: "posters/anime/one-punch-man.jpg", studio: "Madhouse / J.C.Staff", genre: "Action, Superhero Comedy", rating: 8.7 },
        { title: "Classroom of the Elite", kind: 'Series', poster: "posters/anime/classroom-of-the-elite.jpg", studio: "Lerche", genre: "Psychological, Drama", rating: 7.7 },
        { title: "Spirited Away", alt: "Sen to Chihiro no Kamikakushi", kind: 'Movie', year: 2001, poster: "posters/anime/spirited-away-2001.jpg", director: "Hayao Miyazaki", studio: "Studio Ghibli", rating: 8.6 },
        { title: "Your Name", alt: "Kimi no Na wa", kind: 'Movie', year: 2016, poster: "posters/anime/your-name-2016.jpg", director: "Makoto Shinkai", studio: "CoMix Wave Films", rating: 8.4 },
        { title: "Princess Mononoke", alt: "Mononoke Hime", kind: 'Movie', year: 1997, poster: "posters/anime/princess-mononoke-1997.jpg", director: "Hayao Miyazaki", studio: "Studio Ghibli", rating: 8.4 },
        { title: "Grave of the Fireflies", alt: "Hotaru no Haka", kind: 'Movie', year: 1988, poster: "posters/anime/grave-of-the-fireflies-1988.jpg", director: "Isao Takahata", studio: "Studio Ghibli", rating: 8.5 },
        { title: "A Silent Voice", alt: "Koe no Katachi", kind: 'Movie', year: 2016, poster: "posters/anime/a-silent-voice-2016.jpg", director: "Naoko Yamada", studio: "Kyoto Animation", rating: 8.1 },
        { title: "Howl's Moving Castle", kind: 'Movie', year: 2004, poster: "posters/anime/howl-s-moving-castle-2004.jpg", director: "Hayao Miyazaki", studio: "Studio Ghibli", rating: 8.2 },
        { title: "Akira", kind: 'Movie', year: 1988, poster: "posters/anime/akira-1988.jpg", director: "Katsuhiro Otomo", studio: "TMS Entertainment", rating: 8.0 },
        { title: "Demon Slayer: Mugen Train", kind: 'Movie', year: 2020, poster: "posters/anime/demon-slayer-mugen-train-2020.jpg", director: "Haruo Sotozaki", studio: "Ufotable", rating: 8.2 },
        { title: "Weathering With You", alt: "Tenki no Ko", kind: 'Movie', year: 2019, poster: "posters/anime/weathering-with-you-2019.jpg", director: "Makoto Shinkai", studio: "CoMix Wave Films", rating: 7.5 },
        { title: "Suzume", alt: "Suzume no Tojimari", kind: 'Movie', year: 2022, poster: "posters/anime/suzume-2022.jpg", director: "Makoto Shinkai", studio: "CoMix Wave Films", rating: 7.7 }
    ]
};

const CATALOG_KEY = { movie: 'movies', game: 'games', anime: 'anime', series: 'series' };

// Automatic new releases: when enabled, fresh movies, TV series and anime
// (with real poster photos) and fresh games are added next to the titles
// above each time someone visits, no file editing needed. Movies and TV
// series need a free TMDB API key (sign up at https://www.themoviedb.org,
// then create a key at https://www.themoviedb.org/settings/api); games need
// a free RAWG key (https://rawg.io/apidocs); anime needs no key at all.
// Paste any key you get below. Leaving tmdbKey or rawgKey blank just skips
// that part; visitors need an internet connection for any of this to work.
const AUTO_CATALOG = {
    enabled: true,
    tmdbKey: '',
    rawgKey: ''
};

// Tries .jpg, .png and .webp for the same file name, then calls onFail.
function attachPosterFallback(img, onFail) {
    const m = (img.getAttribute('src') || '').match(/\.(jpe?g|png|webp)$/i);
    if (!m) {
        img.addEventListener('error', () => { if (onFail) onFail(); });
        return;
    }
    const base = img.getAttribute('src').slice(0, -m[0].length);
    const first = m[1].toLowerCase() === 'jpeg' ? 'jpg' : m[1].toLowerCase();
    const order = [first].concat(['jpg', 'png', 'webp'].filter(e => e !== first));
    let i = 0;
    img.addEventListener('error', function handler() {
        i++;
        if (i < order.length) {
            img.src = base + '.' + order[i];
        } else {
            img.removeEventListener('error', handler);
            if (onFail) onFail();
        }
    });
}

function findCatalogPoster(type, title) {
    const list = CATALOG[CATALOG_KEY[type]] || [];
    const t = String(title || '').trim().toLowerCase().replace(/[\u2019\u2018]/g, "'");
    const hit = list.find(x => x.title.trim().toLowerCase().replace(/[\u2019\u2018]/g, "'") === t);
    return hit ? hit.poster : '';
}

(function () {
    // Lower-case and drop accents, so "amelie" finds "Amélie"
    const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const safe = p => /^(posters\/|https:\/\/)/i.test(p || '');

    function prefill(type, title) {
        const sel = document.getElementById('r-type');
        sel.value = { movie: 'Movie', game: 'Game', anime: 'Anime', series: 'Series' }[type];
        sel.dispatchEvent(new Event('change'));
        document.getElementById('r-title').value = title;
        document.getElementById('writeReview').scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('r-text').focus({ preventScroll: true });
    }

    function makeTile(item, type) {
        const el = document.createElement('article');
        el.className = 'tile';

        function placeholder() {
            const d = document.createElement('div');
            d.className = 'poster-missing';
            d.setAttribute('aria-hidden', 'true');
            d.textContent = item.title.charAt(0).toUpperCase();
            return d;
        }

        let media;
        if (safe(item.poster)) {
            media = document.createElement('img');
            media.src = item.poster;
            media.alt = item.title + ' poster';
            media.width = 200;
            media.height = 300;
            media.loading = 'lazy';
            attachPosterFallback(media, () => media.replaceWith(placeholder()));
        } else {
            media = placeholder();
        }

        const h = document.createElement('h3');
        h.textContent = item.title;
        el.append(media, h);

        if (item.year || item.lang || item.kind || item.years) {
            const y = document.createElement('p');
            y.className = 'year';
            y.textContent = [item.lang || item.kind, item.year, item.years].filter(Boolean).join(' \u00b7 ');
            el.appendChild(y);
        }

        [item.director ? 'Dir. ' + item.director : '', item.cast || item.studio || '', item.genre || '', item.platforms || ''].forEach(line => {
            if (!line) return;
            const p = document.createElement('p');
            p.className = 'info';
            p.textContent = line;
            el.appendChild(p);
        });
        if (item.rating) {
            const p = document.createElement('p');
            p.className = 'rating';
            p.textContent = '\u2605 ' + Number(item.rating).toFixed(1);
            el.appendChild(p);
        }

        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = 'Write a review';
        b.addEventListener('click', () => prefill(type, item.title));
        el.appendChild(b);
        return el;
    }

    const PAGE = 48;

    function setupGallery(type, items, gridId, searchId) {
        const grid = document.getElementById(gridId);
        const search = document.getElementById(searchId);
        if (!grid) return;
        let sorted = items.slice().sort((a, b) => a.title.localeCompare(b.title));
        let lang = 'all';
        let limit = PAGE;

        const more = document.createElement('button');
        more.type = 'button';
        more.className = 'more-btn';
        grid.parentNode.insertBefore(more, grid.nextSibling);
        more.addEventListener('click', () => { limit += PAGE; render(); });

        // Language drop-down appears when the list has more than one language
        const key = items.some(x => x.lang) ? 'lang' : items.some(x => x.kind) ? 'kind' : 'genre';
        const langs = Array.from(new Set(items.map(x => x[key]).filter(Boolean))).sort();
        if (langs.length > 1) {
            const sel = document.createElement('select');
            sel.className = 'lang-select';
            sel.setAttribute('aria-label', key === 'lang' ? 'Filter by language' : key === 'genre' ? 'Filter by genre' : type === 'game' ? 'Filter by genre' : 'Filter by type');
            [['all', key === 'lang' ? 'All languages' : key === 'genre' ? 'All genres' : type === 'game' ? 'All genres' : 'All types']].concat(langs.map(l => [l, l])).forEach(([v, t]) => {
                const o = document.createElement('option');
                o.value = v;
                o.textContent = t;
                sel.appendChild(o);
            });
            sel.addEventListener('change', () => { lang = sel.value; limit = PAGE; render(); });
            grid.parentNode.insertBefore(sel, grid);
        }

        function render() {
            const q = search ? norm(search.value.trim()) : '';
            const shown = sorted.filter(x => (lang === 'all' || x[key] === lang) &&
                norm([x.title, x.alt, x.lang, x.kind, x.director, x.cast, x.studio, x.genre, x.platforms, x.years].filter(Boolean).join(' ')).includes(q));
            grid.textContent = '';
            if (shown.length === 0) {
                const p = document.createElement('p');
                p.className = 'empty';
                p.textContent = q || lang !== 'all' ? 'No matches found.' : 'Nothing here yet.';
                grid.appendChild(p);
                more.hidden = true;
                return;
            }
            shown.slice(0, limit).forEach(x => grid.appendChild(makeTile(x, type)));
            const left = shown.length - limit;
            more.hidden = left <= 0;
            more.textContent = 'Show more (' + left + ' left)';
        }

        if (search) search.addEventListener('input', () => { limit = PAGE; render(); });
        render();

        return {
            addItems(newItems) {
                if (!newItems || newItems.length === 0) return;
                sorted = sorted.concat(newItems).sort((a, b) => a.title.localeCompare(b.title));
                render();
            }
        };
    }

    const galleries = {
        movie: setupGallery('movie', CATALOG.movies, 'movieGallery', 'movieSearch'),
        game: setupGallery('game', CATALOG.games, 'gameGallery', 'gameSearch'),
        animeMovie: setupGallery('anime', CATALOG.anime.filter(x => x.kind !== 'Series'), 'animeMovieGallery', 'animeMovieSearch'),
        animeSeries: setupGallery('anime', CATALOG.anime.filter(x => x.kind === 'Series'), 'animeSeriesGallery', 'animeSeriesSearch'),
        series: setupGallery('series', CATALOG.series, 'seriesGallery', 'seriesSearch')
    };

    // Suggest library titles in the review form
    const sel = document.getElementById('r-type');
    const dl = document.getElementById('titleList');
    function fillTitles() {
        if (!sel || !dl) return;
        dl.textContent = '';
        const list = CATALOG[CATALOG_KEY[sel.value.toLowerCase()]] || [];
        list.forEach(x => {
            const o = document.createElement('option');
            o.value = x.title;
            dl.appendChild(o);
        });
    }
    if (sel) sel.addEventListener('change', fillTitles);
    fillTitles();

    loadAutoCatalog();

    // Automatic new releases: adds fresh movies, TV series and anime (with
    // real poster photos) from free movie/game/anime databases, and fresh
    // games from RAWG. Nothing here touches the titles you add by hand above;
    // new ones are simply added alongside them each time someone visits.
    // Movies and TV series need a free TMDB API key (https://www.themoviedb.org/settings/api);
    // games need a free RAWG key (https://rawg.io/apidocs); anime needs no key.
    // Paste any key you get into AUTO_CATALOG below. Visitors need an internet
    // connection for this part; if a fetch fails, that section just keeps
    // showing the titles listed above, nothing breaks.
    async function loadAutoCatalog() {
        if (!AUTO_CATALOG.enabled) return;

        const poster = (base, path) => path ? base + path : '';

        async function newMovies() {
            if (!AUTO_CATALOG.tmdbKey) return [];
            const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=' +
                encodeURIComponent(AUTO_CATALOG.tmdbKey) + '&language=en-US&page=1');
            const data = await res.json();
            return (data.results || []).filter(m => m.poster_path).map(m => ({
                title: m.title, year: (m.release_date || '').slice(0, 4) || undefined,
                poster: poster('https://image.tmdb.org/t/p/w500', m.poster_path),
                rating: m.vote_average || undefined, auto: true
            }));
        }

        async function newSeries() {
            if (!AUTO_CATALOG.tmdbKey) return [];
            const res = await fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=' +
                encodeURIComponent(AUTO_CATALOG.tmdbKey) + '&language=en-US&page=1');
            const data = await res.json();
            return (data.results || []).filter(s => s.poster_path).map(s => ({
                title: s.name, years: (s.first_air_date || '').slice(0, 4) || undefined,
                poster: poster('https://image.tmdb.org/t/p/w500', s.poster_path),
                rating: s.vote_average || undefined, auto: true
            }));
        }

        async function newGames() {
            if (!AUTO_CATALOG.rawgKey) return [];
            const today = new Date();
            const ago = new Date(today.getTime() - 60 * 86400000);
            const fmt = d => d.toISOString().slice(0, 10);
            const res = await fetch('https://api.rawg.io/api/games?key=' +
                encodeURIComponent(AUTO_CATALOG.rawgKey) + '&dates=' + fmt(ago) + ',' + fmt(today) +
                '&ordering=-added&page_size=20');
            const data = await res.json();
            return (data.results || []).filter(g => g.background_image).map(g => ({
                title: g.name, poster: g.background_image,
                rating: g.rating ? g.rating * 2 : undefined, auto: true
            }));
        }

        async function newAnime() {
            const res = await fetch('https://api.jikan.moe/v4/seasons/now');
            const data = await res.json();
            return (data.data || []).filter(a => a.images && a.images.jpg && a.images.jpg.image_url).map(a => ({
                title: a.title_english || a.title,
                kind: a.type === 'Movie' ? 'Movie' : 'Series',
                year: a.year || undefined,
                poster: a.images.jpg.image_url,
                studio: (a.studios && a.studios[0] && a.studios[0].name) || undefined,
                genre: (a.genres || []).map(g => g.name).join(', ') || undefined,
                rating: a.score || undefined, auto: true
            }));
        }

        function addFresh(catalogArr, gallery, items) {
            if (!items || items.length === 0) return;
            const have = new Set(catalogArr.map(x => x.title.toLowerCase()));
            const fresh = items.filter(x => x.title && !have.has(x.title.toLowerCase()));
            if (fresh.length === 0) return;
            catalogArr.push(...fresh);
            if (gallery) gallery.addItems(fresh);
        }

        const [movies, series, games, anime] = await Promise.allSettled(
            [newMovies(), newSeries(), newGames(), newAnime()]
        );
        if (movies.status === 'fulfilled') addFresh(CATALOG.movies, galleries.movie, movies.value);
        if (series.status === 'fulfilled') addFresh(CATALOG.series, galleries.series, series.value);
        if (games.status === 'fulfilled') addFresh(CATALOG.games, galleries.game, games.value);
        if (anime.status === 'fulfilled') {
            const list = anime.value;
            addFresh(CATALOG.anime, galleries.animeMovie, list.filter(a => a.kind === 'Movie'));
            addFresh(CATALOG.anime, galleries.animeSeries, list.filter(a => a.kind === 'Series'));
        }
        fillTitles();
    }
})();
