const Products = [
	/*
	=============
	  Vivechrom
	=============
	*/
	{
		name: "Super Neopal",
		description: "Άριστο πλαστικό χρώμα εσωτερικού χώρου. Διακρίνεται για τη μεγάλη του καλυπτικότητα και τις εξαιρετικές αντοχές του στο συχνό πλύσιμο. Δουλεύεται εύκολα, απλώνει θαυμάσια, στεγνώνει γρήγορα και έχει ισχυρή πρόσφυση.",
		category: "Πλαστικό",
		amount: "1L, 3L, 10L",
		image: "https://i.imgur.com/dNqwKiW.png",
	},
	{
		name: "Super Neopal Eco",
		description: "Το SUPER NEOPAL ECO είναι οικολογικό ματ πλαστικό χρώμα ασυναγώνιστης ποιότητας. Είναι πιστοποιημένο από το AFNOR και πληροί τα κριτήρια του οικολογικού σήματος Ecolabel της Ε.Ε. Δεν περιέχει αμμωνία ούτε επικίνδυνες ουσίες όπως βαρέα μέταλλα, ελεύθερη φορμαλδεΰδη, αρωματικούς υδρογονάνθρακες και είναι φιλικό προς το χρήστη και το περιβάλλον. Δουλεύεται εύκολα, έχει ισχυρή πρόσφυση και γρήγορο στέγνωμα. Απλώνει θαυμάσια και δημιουργεί εξαιρετικό μάτ φινίρισμα.",
		category: "Πλαστικό",
		amount: "1L, 3L, 10L",
		image: "https://i.imgur.com/r5xePTF.png",
	},
	{
		name: "Vivecryl Eco",
		description: "To VIVECRYL ECO είναι 100% ακρυλικό οικολογικό χρώμα εξωτερικής χρήσης για απόλυτη προστασία από τον ήλιο, τη βροχή και το χιόνι και έχει μεγάλη διάρκεια ζωής. Εφαρμόζεται σε κάθε είδους νέα ή παλαιά επιφάνεια όπως σοβάς, μπετόν και ξύλο. Δουλεύεται εύκολα, έχει μεγάλη καλυπτικότητα και ισχυρή πρόσφυση. Αδιαβροχοποιεί την επιφάνεια, αποτρέποντας τη δημιουργία λεκέδων από την υγρασία ή τη βροχή, δίνοντάς της παράλληλα τη δυνατότητα \"αναπνοής\".",
		category: "Ακρυλικό Πλαστικό",
		amount: "1L, 3L, 10L",
		image: "https://i.imgur.com/DYSfOrH.png",
	},
	{
		name: "Vivecryl Elastic",
		description: "Το VIVECRYL ELASTIC ECO είναι οικολογικό ελαστομερές ακρυλικό μονωτικό & χρώμα, για την εξαιρετική στεγάνωση των εξωτερικών τοίχων από την υγρασία. Καλύπτει τέλεια τριχοειδή και μικρορωγμές και παρακολουθεί αποτελεσματικά τις συστολές και διαστολές της επιφάνειας, διατηρώντας την ελαστικότητά του από -20°C έως 80°C. Εφαρμόζεται σε κάθε είδους νέα ή παλαιά επιφάνεια, δημιουργώντας μία αδιάβροχη και εξαιρετικά ανθεκτική ελαστική μεμβράνη.",
		category: "Ακρυλικό Πλαστικό",
		amount: "3L, 10L",
		image: "https://i.imgur.com/foZFsPI.png",
	},
	{
		name: "Vivecryl Silicone",
		description: "Το VIVECRYL SILICONE ECO είναι οικολογικό ακρυλικό χρώμα ματ εξωτερικής χρήσης, με βάση σιλικονούχες ακρυλικές ρητίνες. Είναι ιδανικό για περιοχές με υγρασία και ακραίες καιρικές συνθήκες (βουνό, θάλασσα), αφού συνδυάζει την αδιαβροχοποίηση της επιφάνειας και την ταυτόχρονη διαπνοή της, δίνοντας τη δυνατότητα στους υδρατμούς να διαφύγουν με μεγάλη ευκολία. Συνιστάται ιδιαίτερα για την αναπαλαίωση ιστορικών και διατηρητέων κτιρίων. ∆ουλεύεται εύκολα, έχει μεγάλη καλυπτικότητα και ισχυρή πρόσφυση.",
		category: "Ακρυλικό Πλαστικό",
		amount: "3L, 10L",
		image: "https://i.imgur.com/s4wIo9X.png",
	},
	{
		name: "Vivecryl Thermoelastic Eco",
		description: "Το Vivecryl Thermoelastic Eco είναι ένα κορυφαίας ποιότητας οικολογικό ακρυλικό, ειδικό θερμοπροστατευτικό & μονωτικό χρώμα εξωτερικών τοίχων. Έχει ειδικές πρώτες ύλες με θερμομονωτικές ιδιότητες, συμβάλλοντας στην εξοικονόμηση ενέργειας χειμώνα – καλοκαίρι. Διατηρεί την ελαστικότητά του από -20°C έως 80°C και καλύπτει τέλεια τριχοειδή καιμικρορωγμές, προσφέροντας εξαιρετική στεγάνωση από την υγρασία.",
		category: "Ακρυλικό Πλαστικό",
		amount: "3L, 10L",
		image: "https://i.imgur.com/78IlWjb.png",
	},
	{
		name: "Vive Emulsion",
		description: "Tο VIVE EMULSION είναι πλαστικό χρώμα εσωτερικής χρήσης, κατάλληλο για την βαφή επιφανειών όπως τοίχοι, ταβάνια, κλιμακοστάσια, αποθήκες. Αποτελεί την οικονομική και αξιόπιστη λύση για τους επαγγελματίες, σε χώρους που απαιτείται συχνό βάψιμο και φρεσκάρισμα, όπως ξενοδοχεία, σχολεία, νοσοκομεία, μεγάλα δημόσια έργα, προσφέροντας εγγυημένο αποτέλεσμα σε εξαιρετική τιμή.",
		category: "Πλαστικό",
		amount: "750ml, 3L, 9L",
		image: "https://i.imgur.com/tcdByNH.png",
	},
	{
		name: "Vive Eco",
		description: "Tο VIVE ECO είναι οικολογικό πλαστικό χρώμα εσωτερικής χρήσης, κατάλληλο για την βαφή επιφανειών όπως σοβάς, σπατουλαριστές επιφάνειες, μπετόν, γυψοσανίδες. Αποτελεί την οικονομική και αξιόπιστη λύση για κατοικίες, ξενοδοχεία, σχολεία, νοσοκομεία, μεγάλα δημόσια έργα, προσφέροντας εγγυημένο αποτέλεσμα σε εξαιρετική τιμή. Στεγνώνει και επαναβάφεται γρήγορα.",
		category: "Πλαστικό",
		amount: "750ml, 3L, 9L",
		image: "https://i.imgur.com/Pb3o8nZ.png",
	},
	{
		name: "Vive Acrylic",
		description: "Το VIVE ACRYLIC είναι ακρυλικό χρώμα εξωτερικής χρήσης που αποτελεί την οικονομική και αξιόπιστη λύση για τους επαγγελματίες σε επιφάνειες που χρειάζονται συχνή επαναβαφή και φρεσκάρισμα όπως σχολεία, ξενοδοχεία, μεγάλα δημόσια έργα καθώς και επιφάνειες που λερώνονται διαρκώς από συνθήματα, graffiti κ.λ.π.",
		category: "Ακρυλικό Πλαστικό",
		amount: "750ml, 3L, 9L",
		image: "https://i.imgur.com/lzDY5Fs.png",
	},
	{
		name: "Fit Emulsion",
		description: "Πλαστικό οικονομικό χρώμα για εσωτερικούς χώρους.",
		category: "Πλαστικό",
		amount: "750 ml, 3L, 9L",
		image: "https://i.imgur.com/GF0Mjd2.png",
	},
	{
		name: "Fit Acrylic",
		description: "Ακρυλικό οικονομικό χρώμα γενικής χρήσης για εξωτερικές επιφάνειες από σοβά, μπετόν, τούβλα με καλές αντοχές.",
		category: "Ακρυλικό Πλαστικό",
		amount: "1L, 3L, 10L",
		image: "https://i.imgur.com/jMYwkuK.png",
	},
	{
		name: "Fit Υδρόχρωμα",
		description: "To Fit Υδρόχρωμα είναι χρώμα για χρήση σε ταβάνια, κλιμακοστάσια, αποθήκες, και γενικά όπου δεν απαιτούνται αντοχές σε πλύσιμο και λέκιασμα. Αποτελεί την εξαιρετικά οικονομική και αξιόπιστη λύση για τους επαγγελματίες που επιλέγουν αρχικό βάψιμο με υδρόχρωμα ή φρεσκάρισμα πάνω σε ήδη βαμμένες επιφάνειες με υδροχρώματα – κόλλες. Στεγνώνει και επαναβάφεται γρήγορα. Συνδυάζει μεγάλη λευκότητα, υψηλή καλυπτικότητα, εύκολη εφαρμογή και πολύ καλό άπλωμα χωρίς ρολιές και ματίσεις.",
		category: "Υδρόχρωμα",
		amount: "3L, 10L",
		image: "https://i.imgur.com/CiFbNnr.png",
	},
	{
		name: "Neopal Satine",
		description: "Το Neopal Satine Eco είναι οικολογικό πλαστικό χρώμα πολυτελείας με μοντέρνα βελούδινη υφή και διακρίνεται από το θαυμάσιο ομοιόμορφο άπλωμα του. Το σατινέ του φινίρισμα αναδεικνύει μοναδικά κάθε απόχρωση. Δουλεύεται εύκολα και έχει υψηλή λευκότητα και μεγάλη καλυπτικότητα. Παρουσιάζει εξαιρετικές αντοχές στο συχνό πλύσιμο και στα απορρυπαντικά, στις αλλοιώσεις από το κάπνισμα και στις δυσμενείς καιρικές συνθήκες.",
		category: "Πλαστικό",
		amount: "1L, 3L, 10L",
		image: "https://i.imgur.com/MVjwvV1.png",
	},
	{
		name: "Neopal Relief",
		description: "Tο NEOPAL RELIEF είναι ανάγλυφο διακοσμητικό επίχρισμα μεγάλης αντοχής, εξωτερικής και εσωτερικής χρήσης. Είναι κατάλληλο για όλες τις νέες και παλαιές επιφάνειες όπως σοβάς, μπετόν, ξύλο, νοβοπάν. Έχει ισχυρή πρόσφυση και εξαιρετικές αντοχές στις δυσμενείς καιρικές συνθήκες. Μπορεί να δημιουργήσει μια μεγάλη ποικιλία διακοσμητικών σχεδίων με την χρησιμοποίηση ειδικών ρολών, καλύπτοντας ταυτόχρονα όλες τις μικροατέλειες της επιφάνειας στην οποία εφαρμόζεται.",
		category: "Διακοσμητικό Επίχρισμα",
		amount: "5kg, 15kg",
		image: "https://i.imgur.com/30n7stM.png",
	},
	{
		name: "Isotop PU Hybrid",
		description: "Το Isotop PU Hybrid είναι υβριδικό ελαστομερές νέας τεχνολογίας βάσεως ακρυλικής πολυουρεθάνης νερού προσφέροντας προστασία μέχρι και 10 χρόνια. Είναι κατάλληλο για ταράτσες, στηθαία, στέγες, κεραμίδια και υδρορροές, σχηματίζοντας μια μεμβράνη αδιαπέραστη από την υγρασία, τα λιμνάζοντα νερά και τον πάγο.",
		category: "Στεγανωτικό",
		amount: "750ml, 3L, 10L",
		image: "https://i.imgur.com/sqQKU9a.png",
	},
	{
		name: "Vivedur Στεγανωτικό",
		description: "To VIVEDUR είναι υψηλής ποιότητας στεγανωτικό και μονωτικό επίχρισμα με μεγάλη πρόσφυση και ελαστικότητα για ταράτσες, στηθαία, φωταγωγούς, στέγες με κεραμίδια, υδρορροές. Πιστοποιημένο ψυχρό χρώμα, αντέχει σε υψηλές θερμοκρασίες και στον παγετό, παραμένοντας ελαστικό από 80°C έως και κάτω από -20°C.",
		category: "Στεγανωτικό",
		amount: "750ml, 3L, 10L",
		image: "https://i.imgur.com/aYOfEDb.png",
	},
	{
		name: "Vive Roof",
		description: "Το VIVE ROOF είναι υδατοδιαλυτό λευκό ελαστομερές στεγανωτικό χρώμα για ταράτσες, στηθαία, φωταγωγούς, στέγες με κεραμίδια και αποτελεί την οικονομική και αξιόπιστη λύση στη στεγάνωση. Έχει υψηλή ελαστικότητα και αντοχή στις δυσμενείς καιρικές συνθήκες. Μειώνει σημαντικά τη θερμοκρασία της ταράτσας το καλοκαίρι από 3-5ο C μειώνοντας έτσι την ανάγκη χρήσης κλιματισμού και συμβάλλει στην εξοικονόμηση ενέργειας.",
		category: "Στεγανωτικό",
		amount: "3L, 10L",
		image: "https://i.imgur.com/LqehgsO.png",
	},
	{
		name: "Vivedur Block",
		description: "To VIVEDUR BLOCK είναι λευκό, ακρυλικό μονωτικό υπόστρωμα νερού, κατάλληλο για όλες τις εσωτερικές και εξωτερικές οικοδομικές επιφάνειες. Μονώνει και καλύπτει λεκέδες από καπνό, νικοτίνη, κιτρινίλες, υδατοδιαλυτούς μαρκαδόρους, καφέ, χυμό, παλαιές υγρασίες, και άλλους ρύπους. Έχει υψηλή καλυπτικότητα, μεγάλη απόδοση και ισχυρή πρόσφυση. Δεν περιέχει αμμωνία και είναι χαμηλής οσμής.",
		category: "Μονωτικό",
		amount: "0.75L, 3L, 10L",
		image: "https://i.imgur.com/njpDNgT.png",
	},
	{
		name: "Neopal Kitchen & Bathroom",
		description: "Το Neopal Kitchen & Bathroom είναι οικολογικό αντιμικροβιακό πλαστικό χρώμα κορυφαίας ποιότητας. Είναι πιστοποιημένο για την εξαιρετική αντιμικροβιακή του δράση, και περιέχει ειδικές μυκητοκτόνες ουσίες που προστατεύουν την επιφάνεια του φιλμ του χρώματος εμποδίζοντας δραστικά την ανάπτυξη μούχλας και βακτηρίων, σε χώρους με υψηλή υγρασία και υδρατμούς, όπως κουζίνες, μπάνια, ταβάνια, υπόγεια.",
		category: "Πλαστικό Αντιμουχλικό",
		amount: "1L, 3L, 10L",
		image: "https://i.imgur.com/xbWRFXJ.png",
	},
	{
		name: "Betochrom Διαλυτικού",
		description: "Το Betochrom Διαλυτικού είναι ειδικό ακρυλικό τσιμεντόχρωμα διαλύτου που προστατεύει αποτελεσματικά τις επιφάνειες από μπετό όπως δάπεδα για καθημερινή χρήση και ήπια καταπόνηση, σκάλες, πλακόστρωτα, πεζοδρόμια, αυλές, γκαράζ και τοίχους. Συνιστάται ιδιαίτερα για εμφανές μπετόν γιατί προστατεύει τον φέροντα οπλισμό απο τη διάβρωση. Εφαρμόζεται εύκολα και έχει ισχυρή πρόσφυση, μεγάλη καλυπτικότητα και μεγάλες αντοχές στις δυσμενείς καιρικές συνθήκες.",
		category: "Τσιμεντόχρωμα",
		amount: "750ml, 3L",
		image: "https://i.imgur.com/nKPufuo.png",
	},
	{
		name: "Betochrom Νερού",
		description: "Το BETOCHROM ΝΕΡΟΥ είναι ακρυλικό τσιμεντόχρωμα για τοίχους. Εφαρμόζεται σε εξωτερικές και εσωτερικές επιφάνειες όπως εμφανές μπετόν, σοβά, τούβλα. Έχει ισχυρή πρόσφυση και παρέχει υψηλή αδιαβροχοποίηση προστατεύοντας από τη διάβρωση του οπλισμού του σκυροδέματος. Παρουσιάζει μεγάλη αντοχή στα αλκάλια και εξαιρετική αντοχή στις καιρικές συνθήκες. Έχει μεγάλη καλυπτικότητα, πολύ υψηλή απόδοση και δουλεύεται πολύ εύκολα.",
		category: "Τσιμεντόχρωμα",
		amount: "750ml, 3L",
		image: "https://i.imgur.com/inZAVMC.png",
	},
	{
		name: "Aquachrom Eco",
		description: "Το AQUACHROM ECO είναι οικολογική ριπολίνη νερού εξαιρετικής ποιότητας, για ξύλινες επιφάνειες, με ειδικές πρώτες ύλες νέας τεχνολογίας. Είναι πιστοποιημένο οικολογικό χρώμα και πληροί τα κριτήρια απονομής του οικολογικού σήματος της Ευρωπαϊκής Ένωσης. Είναι ιδανικό για εσωτερική και εξωτερική χρήση. Έχει εξαιρετική πρόσφυση και είναι κατάλληλο για την επαναβαφή παλαιών βερνικοχρωμάτων διαλύτου (ριπολίνες ή λαδομπογιές). Έχει μεγάλη λευκότητα και δεν κιτρινίζει με την πάροδο του χρόνου.",
		category: "Ριπολίνη",
		amount: "750ml, 2,5L",
		image: "https://i.imgur.com/IOcKPMf.png",
	},
	{
		name: "Vivewood",
		description: "Το VIVEWOOD είναι ριπολίνη εξαιρετικής ποιότητας για ξύλα και μέταλλα, σχεδιασμένη ειδικά για τον επαγγελματία ελαιοχρωματιστή. Εξασφαλίζει πολύ μεγάλη καλυπτικότητα και ένα τέλειο φινίρισμα σαν καθρέπτη. Το μαλακό δούλεμα, το καταπληκτικό άπλωμα, η ελαστικότητά του και η θαυμάσια τελική του εμφάνιση, το καθιστούν ιδανικό χρώμα για πόρτες, παράθυρα, κάθε ξύλινη κατασκευή καθώς και για μεταλλικές επιφάνειες, όπου μια πολύ λεία και ανθεκτική επιφάνεια είναι επιθυμητή.",
		category: "Ριπολίνη",
		amount: "750ml",
		image: "https://i.imgur.com/7EUm2d9.png",
	},
	{
		name: "Vivemetal",
		description: "Το VIVEMETAL είναι ντούκο μεγάλης σκληρότητας και υψηλής αντοχής για μέταλλα. Είναι ιδανικό χρώμα για πόρτες, κάγκελα, σιδηροκατασκευές, εργαλεία, μηχανήματα και για κάθε επιφάνεια όπου είναι επιθυμητό ένα αξεπέραστο γυαλιστερό ή σατινέ φινίρισμα. Στεγνώνει γρήγορα και διατηρεί τη γυαλάδα και την απόχρωση του ακόμα και στις πιο δυσμενείς καιρικές συνθήκες. Με την προσθήκη σκληρυντή VIVEHARD επιτυγχάνεται γρηγορότερο στέγνωμα και πολύ μεγαλύτερη σκληρότητα.",
		category: "Ντούκο",
		amount: "750ml",
		image: "https://i.imgur.com/WAETm5a.png",
	},
	{
		name: "Vivehard",
		description: "Το VIVEHARD είναι σκληρυντής για αλκυδικά χρώματα για χρήση από επαγγελματίες. Η προσθήκη του VIVEHARD στo VIVEMETAL επιταχύνει το στέγνωμα, αναπτύσσει πολύ μεγάλης σκληρότητας στεγνό φιλμ σε μικρότερο χρόνο, ενισχύει τις αντοχές στα χτυπήματα, θωρακίζει την γυαλάδα και την απόχρωση ακόμα και στις πιο δυσμενείς καιρικές συνθήκες.",
		category: "",
		amount: "750ml",
		image: "https://i.imgur.com/iQEXf41.png",
	},
	{
		name: "Σφυρήλατο",
		description: "Το ΣΦΥΡΗΛΑΤΟ είναι διακοσμητικό και προστατευτικό βερνικόχρωμα που δίνει στη βαφόμενη επιφάνεια την εμφάνιση σφυρηλατημένου μετάλλου. Αποτελεί εύκολη και αποτελεσματική λύση για τη διακόσμηση, ανανέωση και προστασία όλων των μεταλλικών επιφανειών όπως πόρτες, ασανσέρ, κάγκελα, μεταλλικά έπιπλα, κουπαστές, διακοσμητικά μικροαντικείμενα κτλ. Είναι ταχυστέγνωτο και έχει ισχυρή πρόσφυση.",
		category: "Σφυρήλατο",
		amount: "750ml",
		image: "https://i.imgur.com/5oPMx89.png",
	},
	{
		name: "Neochrom Silicone",
		description: "Το NEOCHROM SILICONE είναι σιλικονούχο βερνικόχρωμα διαλύτου υψηλής σκληρότητας και αντοχής κατάλληλο για όλες τις εσωτερικές ή εξωτερικές μεταλλικές και ξύλινες επιφάνειες. Η νέα ειδική σύνθεση με σιλικόνη δημιουργεί ένα ιδιαίτερο σκληρό και ταυτόχρονα ελαστικό φινίρισμα που παρουσιάζει μεγάλες αντοχές στις δυσμενείς καιρικές συνθήκες, στην ατμοσφαιρική ρύπανση και στο πλύσιμο. Περιέχει φίλτρα UV για αποτελεσματική προστασία από την ηλιακή ακτινοβολία.",
		category: "Βερνικόχρωμα",
		amount: "375ml, 750ml, 2.5L",
		image: "https://i.imgur.com/QyUDcct.png",
	},
	{
		name: "Vivelock Gloss",
		description: "Το VIVELOCK GLOSS είναι ειδικό γυαλιστερό χρώμα, το οποίο εφαρμόζεται κατευθείαν σε σκουριασμένες μεταλλικές επιφάνειες χωρίς αντισκωριακό αστάρι. αποτελεί την εύκολη και αποτελεσματική λύση για τη σκουριά και την προστασία νέων ή παλαιών μεταλλικών επιφανειών, όπως πόρτες, κάγκελα και κάθε είδους σιδηροκατασκευές. Έχει ισχυρή πρόσφυση, μεγάλη σκληρότητα και πολύ καλό άπλωμα. Διατηρεί τη στιλπνότητα και τις αποχρώσεις του αναλλοίωτες για μεγάλο χρονικό διάστημα.",
		category: "Αντισκωριακό Χρώμα",
		amount: "750ml, 2.5L",
		image: "https://i.imgur.com/3KFGBbU.png",
	},
	{
		name: "Vivelock Metallized",
		description: "Το VIVELOCK METALLIZED είναι προστατευτικό και διακοσμητικό χρώμα που εφαρμόζεται κατευθείαν σε κουριασμένες μεταλλικές επιφάνειες, χωρίς την ανάγκη αντισκωριακού ασταριού, και δίνει στη βαφόμενη επιφάνεια ένα θαυμάσιο σαγρέ ματ μεταλιζέ φινίρισμα. Έχει επίσης καλή πρόσφυση και σε γαλβανισμένες επιφάνειες. Αποτελεί την εύκολη και αποτελεσματική λύση για τη διακόσμηση, προστασία και ανανέωση μεταλλικών επιφανειών, εσωτερικά και εξωτερικά του σπιτιού και των σύγχρονων κτιρίων.",
		category: "Αντισκωριακό Χρώμα",
		amount: "750ml, 2.5L",
		image: "https://i.imgur.com/EM0SsBU.png",
	},
	{
		name: "Radiater Aqua Eco",
		description: "Το RADIATER AQUA ECO είναι ειδικό χρώμα νερού για καλοριφέρ, με κορυφαίες πρώτες ύλες νέας τεχνολογίας. Είναι πιστοποιημένο οικολογικό χρώμα από την Ευρωπαϊκή Ένωση. Παρουσιάζει μεγάλη αντοχή στη θερμοκρασία των καλοριφέρ και διατηρεί την γυαλάδα του και τη λευκότητά του για μεγάλο χρονικό διάστημα. Έχει εξαιρετική πρόσφυση και καλυπτικότητα και είναι κατάλληλο για την επαναβαφή παλαιών βερνικοχρωμάτων διαλύτου. Δουλεύεται εύκολα, απλώνει θαυμάσια, στεγνώνει γρήγορα και δεν μυρίζει.",
		category: "Ειδικά Χρώματα",
		amount: "750ml",
		image: "https://i.imgur.com/vJ3TdG2.png",
	},
	{
		name: "Radiater",
		description: "Το ΡΑΔΙΑΤΕΡ είναι γυαλιστερό βερνικόχρωμα ιδανικό για την βαφή σωμάτων καλοριφέρ. Παρουσιάζει μεγάλη αντοχή στις θερμοκρασίες των καλοριφέρ και διατηρεί την γυαλάδα του για μεγάλο χρονικό διάστημα. Έχει μεγάλη καλυπτικότητα, δουλεύεται μαλακά και απλώνει θαυμάσια. Διατίθεται σε λευκό.",
		category: "Ειδικά Χρώματα",
		amount: "750ml",
		image: "https://i.imgur.com/TUh6xwF.png",
	},
	{
		name: "Chassicoat",
		description: "Tο CHASSICOAT είναι ταχυστέγνωτο βερνικόχρωμα για την βαφή σασί αυτοκινήτων. Μπορεί επίσης να χρησιμοποιηθεί σαν υπόστρωμα για κάθε μεταλλική επιφάνεια. Έχει ισχυρή πρόσφυση και μεγάλη ελαστικότητα. Παρουσιάζει ιδιαίτερη αντοχή στα xτυπήματα, στην υγρασία και στα πετρελαιοειδή.",
		category: "Αντισκωριακό Χρώμα",
		amount: "750ml",
		image: "https://i.imgur.com/yTPfl89.png",
	},
	{
		name: "Neopal Easycare",
		description: "To NEOPAL Easycare Eco είναι οικολογικό πλαστικό χρώμα που χάρη στην καινοτόμο σύνθεσή του απωθεί τους υγρούς λεκέδες, αποτρέποντας τους να εισέρχονται σε βάθος. Αποδεδειγμένα πολύ πιο ανθεκτικό στο τρίψιμο από ένα κοινό πλαστικό χρώμα. Δουλεύεται εύκολα, έχει υψηλή λευκότητα, μεγάλη καλυπτικότητα και διακρίνεται για το θαυμάσιο, ομοιόμορφο άπλωμά του και το βελούδινο φινίρισμά του. Είναι κατάλληλο για σπατουλαριστές επιφάνειες, γυψοσανίδες, σοβά, μπετόν.",
		category: "Αντισκωριακό Χρώμα",
		amount: "1L",
		image: "https://i.imgur.com/6J4pKBB.png",
	},
	{
		name: "Χρώμα Διαγραμμίσεως",
		description: "Ειδικό χρώμα ενός συστατικού, βάσεως συνθετικών ρητινών, κατάλληλο για διαγραμμίσεις ασφαλτικών οδοστρωμάτων, τσιμεντένιων δαπέδων βιομηχανικών χώρων και αθλητικών γηπέδων. Ενδείκνυται η εφαρμογή του σε συνδυασμό με κατάλληλα μικρά γυάλινα σφαιρίδια για μεγαλύτερη ανακλαστικότητα.",
		category: "Χρώμα Διαγραμμίσεως",
		amount: "5kg",
		image: "https://i.imgur.com/KK84iVe.png",
	},
	{
		name: "Στεγνωτικό Fort",
		description: "Το ΣΤΕΓΝΩΤΙΚΟ FORT είναι βοηθητικό πρόσθετο βάσεως οργανομεταλλικών αλάτων, απαραίτητο για το γρήγορο και πλήρες στέγνωμα λαδερών στόκων και λινελαίου.",
		category: "Πρόσθετο Στόκων & Λινέλαιο",
		amount: "1L",
		image: "https://i.imgur.com/eD0iDLW.png",
	},
	/*
	===============
	  Cosmochrome
	===============
	*/
	{
		name: "Bingo Eco",
		description: "Πλαστικό χρώμα εξαιρετικής ποιότητας, κατάλληλο για εσωτερικές και εξωτερικές επιφάνειες. Παρασκευάζεται με εξαιρετικές ευρωπαϊκές πρώτες ύλες. Έχει πολύ καλή λευκότητα, μεγάλη καλυπτικότητα και εξαιρετική αντοχή. Ιδανικό για σοβάδες, τοίχους. Δουλεύεται εύκολα και είναι η οικονομικότερη λύση στο πλαστικό χρώμα. Δεν περιέχει αμμωνία και διαλύτες. Άοσμο, φιλικό στον χρήστη και το περιβάλλον. Αποδίδει 11-13m²/lt. Στεγνώνει σε 1-2 ώρες.",
		category: "Πλαστικό",
		amount: "3L",
		image: "https://i.imgur.com/6zzyrCH.png",
	},
	{
		name: "Velvet",
		description: "Πλαστικό χρώμα υψηλής ποιότητας παρασκευάζεται στην Ελλάδα με εκλεκτές Ευρωπαϊκές πρώτες ύλες. Έχει μεγάλη καλυπτικότητα και τεράστια αντοχή. Είναι κατάλληλο τόσο για εσωτερική όσο και για εξωτερική χρήση. Είναι βασισμένο στις συμπολυμερείς ρητίνες (P.V.A – VEOVA). Εφαρμόζεται σε σοβά, μπετόν, τούβλα, ξύλα.",
		category: "Πλαστικό",
		amount: "750ml, 3L",
		image: "https://i.imgur.com/t09JbgX.png",
	},
	{
		name: "Venus",
		description: "Aκρυλικό χρώμα υψηλής ποιότητας παρασκευάζεται στην Ελλάδα με εκλεκτές Ευρωπαϊκές πρώτες ύλες. Έχει μεγάλη καλυπτικότητα και τεράστια αντοχή. Είναι κατάλληλο τόσο για εσωτερική όσο και για εξωτερική χρήση. Είναι βασισμένο στις συμπολυμερείς ρητίνες (P.V.A – VEOVA). Εφαρμόζεται σε σοβά, μπετόν, τούβλα, ξύλα.",
		category: "Ακρυλικό Πλαστικό",
		amount: "3L, 9L",
		image: "https://i.imgur.com/7MR6Z6g.png",
	},
	{
		name: "Rocket",
		description: "Οικολογικό εξαιρετικής ποιότητας 100% ακρυλικό χρώμα για τη βαφή και προστασία εξωτερικής τοιχοποιίας. Κατάλληλο για τη βαφή καινούριων ή ξαναβαμμένων τοίχων, σοβάδων, μπετόν. Παρουσιάζει εξαιρετική πρόσφυση και αντοχή στα αλκάλια και εξαιρετική αντοχή στην υπεριώδη ακτινοβολία και τις δυσμενείς καιρικές συνθήκες. Η ειδική σύνθεση του εξασφαλίζει την καλή αναπνοή και πολύ καλή αδιαβροχοποίηση στις επιφάνειες όπου εφαρμόζεται.",
		category: "Ακρυλικό Πλαστικό",
		amount: "750ml, 3L",
		image: "https://i.imgur.com/xoUvZtY.png",
	},
	{
		name: "Antigrex",
		description: "Mονωτικό εξαιρετικής ποιότητας στεγανωτικό επίχρισμα ταρατσών που βασίζεται στις ακρυλικές ελαστομερείς ρητίνες. Είναι ιδανικό για ταράτσες, εξωτερικούς τοίχους. Αποδίδει 3-7m²/lt, αναλόγως του πάχους επίστρωσης. Στεγνώνει σε 3-4 ώρες και επαναβάφεται μετά από 24 ώρες.",
		category: "Στεγανωτικό",
		amount: "750ml, 3L",
		image: "https://i.imgur.com/gdxuEWN.png",
	},
	{
		name: "Umbrella",
		description: "Το μονωτικό UMBRELLA είναι ένα εξαιρετικής ποιότητας στεγανωτικό επίχρισμα ταρατσών που βασίζεται στις ακρυλικές ελαστομερείς ρητίνες. Είναι ιδανικό για ταράτσες, εξωτερικούς τοίχους, σοβάδες, μπετόν και δεξαμενές. Έχει την ιδιότητα να παραμένει ελαστομερές με αποτέλεσμα να στεγανοποιεί, να βάφει αλλά και ταυτόχρονα οι επιφάνειες να αναπνέουν. Ακόμα δεν επιτρέπει την ανάπτυξη μούχλας και έχει μεγάλη διάρκεια ζωής. Αποδίδει 3-7m²/lt,αναλόγως του πάχους επίστρωσης. Επαναβάφεται μετά από 24 ώρες.",
		category: "Στεγανωτικό",
		amount: "750ml",
		image: "https://i.imgur.com/inwR9aG.png",
	},
	{
		name: "Eurolac",
		description: "Ριπολίνη νερού υψηλής ποιότητας εσωτερικής και εξωτερικής χρήσης. Είναι άοσμη και δεν κιτρινίζει με την πάροδο του χρόνου. Εφαρμόζεται σε ξύλο, τοίχους, μέταλλο, PVC κλπ. Επίσης είναι κατάλληλη για την επανα- βαφή παλαιών βερνικοχρωμάτων. Δουλεύεται μαλακά, απλώνει θαυμάσια και έχει μεγάλη καλυπτικότητα. Είναι 100% ακρυλικό βερνικόχρωμα νερού χωρίς μόλυβδο. Διατίθεται σε λευκή γυαλιστερή, ματ, και σατινέ.",
		category: "Ριπολίνη",
		amount: "750ml",
		image: "https://i.imgur.com/43b5mrU.png",
	},
	{
		name: "X-RUST",
		description: "Ειδικό γυαλιστερό χρώμα, το οποίο εφαρμόζεται κατευθείαν σε σκουριασμένες επιφάνειες, χωρίς την ανάγκη για αντισκωριακό αστάρι ή υπόστρωμα. Είναι η εύκολη και αποτελεσματική λύση για την σκουριά και την προστασία νέων και παλιών επιφανειών. Προσφέρει εξαιρετική αντιδιαβρωτική προστασία και ένα όμορφο τελείωμα που διατηρεί τη γυαλάδα του και τις αποχρώσεις αναλλοίωτες στον χρόνο.",
		category: "Αντισκωριακό Χρώμα",
		amount: "750ml",
		image: "https://i.imgur.com/PVqtBRW.png",
	},
	{
		name: "Χρώμα διαγραμμίσεως",
		description: "Ταχυστέγνωτο ακρυλικό χρώμα διαλύτου, κατάλληλο για τη διαγράμμιση οδοστρωμάτων, σκυροδέματος, διαβάσεων πεζών, αντιολισθητικών λωρίδων, αποθηκών, χώρων στάθμευσης. Ανθεκτικό στη γήρανση και την έκθεση στην υπεριώδη ακτινοβολία. Η λευκότητα και η φωτεινότητά του είναι ιδιαίτερα υψηλή και δεν επηρεάζεται από τη θερμότητα της ασφάλτου. Διατηρείται σε όλες τις καιρικές συνθήκες, ακόμα και με την πάροδο του χρόνου ή κατά τη διάρκεια του καλοκαιριού με τις πολύ υψηλές θερμοκρασίες. Δεν δημιουργεί σημάδια και αντέχει στη φθορά από τις ρόδες των αυτοκινήτων.",
		category: "Χρώμα Διαγραμμίσεως",
		amount: "750ml, 3L",
		image: "https://i.imgur.com/5DjrnpZ.png",
	},
	{
		name: "Χρώμα πινάκων",
		description: "Το ΧΡΩΜΑ ΠΙΝΑΚΩΝ είναι ματ βερνικόχρωμα αλκυδικών ρητινών μεγάλης αντοχής που διατηρεί την στιλπνότητα και τις αποχρώσεις του αναλοίωτες. Αποδίδει επιφάνεια λεία, σκληρή, ανθεκτική και ελαστική και προσφέρει προστασία και ομορφιά που διαρκεί. Έχει μεγάλη αντοχή στις καιρικές συνθήκες και στο πλύσιμο. Είναι κατάλληλο για όλες τις εξωτερικές και εσωτερικές επιφάνειες και ιδανικό για προετοιμασία και φρεσκάρισμα σχολικών πινάκων. Δουλεύεται μαλακά, απλώνει θαυμάσια και έχει μεγάλη καλυπτικότητα.",
		category: "Χρώμα Πινάκων",
		amount: "750ml",
		image: "https://i.imgur.com/wB0E2g1.png",
	},
	{
		name: "Αλουμίνιο Υψηλής Θερμοκρασίας",
		description: "Το Αλουμίνιο COSMOCHROME αντέχει στη φωτιά, δεν καίγεται και δε μαυρίζει. Ειδικό για ψυγεία, σόμπες, είδη εξοχής.",
		category: "Χρώμα Υψηλής Θερμοκρασίας",
		amount: "1kg",
		image: "https://i.imgur.com/W9wVIMA.png",
	},
	{
		name: "HTP Χρώμα Υψηλής Θερμοκρασίας",
		description: "Χρώμα Υψηλής Θερμοκρασίας (140°C-200°C) με βάση ρητίνες σιλικόνης, με άριστη πρόσφυση, υψηλή αντοχή στα οξειδωτικά μέσα και στην φωτιά. Ιδανικό για εξατμίσεις, λέβητες, καμινάδες, σόμπες, μπουριά κλπ. Δεν καίγεται, δεν μαυρίζει.",
		category: "Χρώμα Υψηλής Θερμοκρασίας",
		amount: "1kg",
		image: "https://i.imgur.com/KogTAAa.png",
	},
	/*
	===========
	  Berling
	===========
	*/
	{
		name: "Yes Eco",
		description: "Καλής ποιότητας οικολογικό πλαστικό χρώμα με υψηλή απόδοση και λευκότητα. Ιδανική λύση για όσους επιθυμούν ένα ποιοτικό χρώμα σε μια οικονομική τιμή. Είναι οικολογικό, χρωματίζεται και είναι ιδανικό για επιφάνειες όπου απαιτείται συχνό βάψιμο. Καλές αποδόσεις σε πολύ προσιτή τιμή.",
		category: "Πλαστικό",
		amount: "750ml, 9L",
		image: "https://i.imgur.com/i6KM5Mk.png",
	},
	{
		name: "Anti Rust Lac",
		description: "Τελικό χρώμα νέας σύνθεσης που λειτουργεί σαν αντισκωριακό αστάρι και χρώμα σε κάθε μεταλλική επιφάνεια. Ένα προιόν με τρεις ιδιότητες, αντισκωριακό, αστάρι και τελείωμα μαζί.",
		category: "Αντισκωριακό Χρώμα",
		amount: "750ml, 2,5L",
		image: "https://i.imgur.com/HVEUDam.png",
	},
	{
		name: "Magnetic Paint",
		description: "Μαύρο ακρυλικό χρώμα νερού, που μετατρέπει οποιαδήποτε εσωτερική επιφάνεια σε μαγνητική επιφάνεια, στην οποία αναπτύσσουν πρόσφυση μαγνητικά αντικείμενα (μαγνήτες). Εφαρμόζεται σε καινούριες ή ήδη βαμμένες επιφάνειες όπως τοίχος, MDF, κόντρα πλακέ, τσιμέντο, μπετόν, γυψοσανίδα, μετά από την κατάλληλη προετοιμασία τους. Η μαγνητική επιφάνεια μπορεί να επαναβαφεί σε οποιαδήποτε απόχρωση της αρεσκείας σας διατηρώντας τη μαγνητική της ιδιότητα.",
		category: "Ακρυλικό Μαγνητικής Επιφάνειας",
		amount: "750ml",
		image: "https://i.imgur.com/yy3gsmZ.png",
	},
	{
		name: "Ferromicaceo",
		description: "Αντιδιαβρωτικό χρώμα βάσεως διαλύτη βασισμένο σε αλκυδικές - ουρεθανικές ρητίνες. Περιέχει σιδηρομαγνησιούχο οξείδιο και αντισκωριακά πιγμέντα. Χαρακτηρίζεται από εξαιρετική αδιαπερατότητα από το νερό, μεγάλη ανθεκτικότητα στις φυσικές φθορές των μεταλλικών επιφανειών και υψηλή πρόσφυση. Είναι κατάλληλο για μεταλλικές επιφάνειες για εσωτερική και εξωτερική χρήση. Προστατεύει και διακοσμεί, προσδίδοντας μεταλλικό αποτέλεσμα όψης σιδήρου.",
		category: "Αντισκωριακό Χρώμα",
		amount: "750ml",
		image: "https://i.imgur.com/PCQttbs.png",
	},
	{
		name: "Professional Eco Leader",
		description: "To Professional Eco - Leader είναι εξαιρετικής ποιότητας οικολογικό, πλαστικό, σχεδόν άοσμο υδατοδιάλυτο χρώμα. Εφαρμόζεται πολύ εύκολα δίνοντας μια τελείως ματ επιφάνεια, έχει πολύ καλή πρόσφυση και στεγνώνει γρήγορα. Είναι κατάλληλο για όλων των ειδών τις εσωτερικές επιφάνειες όπου απαιτείται τελείως ματ φινίρισμα όπως γυψοσανίδες, σοβάδες, τοίχους, ταβάνια καθώς και για χώρους με περιορισμένο αερισμό όπως κλιμακοστάσια και υπόγεια, λόγω της πολύ χαμηλής περιεκτικότητάς του σε πτητικές οργανικές ενώσεις.",
		category: "Πλαστικό",
		amount: "750ml",
		image: "https://i.imgur.com/BsVUoSy.png",
	},
	/*
	=============
	  Hammerite
	=============
	*/
	{
		name: "Hammerite Μεταλιζέ",
		description: "Το HAMMERITE ΑΠΕΥΘΕΙΑΣ ΣΤΗ ΣΚΟΥΡΙΑ είναι χρώμα μετάλλων για εφαρμογή απευθείας σε σκουριασμένο μέταλλο. Η ειδική του σύνθεση περιλαμβάνει υπόστρωμα και τελικό χρώμα σε μία συσκευασία, εξασφαλίζοντας προστασία για μεγάλο χρονικό διάστημα σε κάθε εσωτερική ή εξωτερική μεταλλική επιφάνεια. Παρέχει λεία στην αφή διακοσμητική εμφάνιση και αντιδιαβρωτική προστασία.Έχει ισχυρή πρόσφυση, μεγάλη σκληρότητα και εξαιρετικό φινίρισμα. Προσφέρεται σε μεταλιζέ, σατινέ και γυαλιστερό.",
		category: "Αντισκωριακό Χρώμα",
		amount: "750ml",
		image: "https://i.imgur.com/rf6UtAs.png",
	},
	{
		name: "Hammerite Σατινέ-Γυαλιστερό",
		description: "Το HAMMERITE ΑΠΕΥΘΕΙΑΣ ΣΤΗ ΣΚΟΥΡΙΑ είναι χρώμα μετάλλων για εφαρμογή απευθείας σε σκουριασμένο μέταλλο. Η ειδική του σύνθεση περιλαμβάνει υπόστρωμα και τελικό χρώμα σε μία συσκευασία, εξασφαλίζοντας προστασία για μεγάλο χρονικό διάστημα σε κάθε εσωτερική ή εξωτερική μεταλλική επιφάνεια. Παρέχει λεία στην αφή διακοσμητική εμφάνιση και αντιδιαβρωτική προστασία.Έχει ισχυρή πρόσφυση, μεγάλη σκληρότητα και εξαιρετικό φινίρισμα. Προσφέρεται σε μεταλιζέ, σατινέ και γυαλιστερό.",
		category: "Αντισκωριακό Χρώμα",
		amount: "750ml",
		image: "https://i.imgur.com/CyG3Mf0.png",
	},
	{
		name: "Hammerite Σφυρήλατο",
		description: "Η ειδική του σύνθεση περιλαμβάνει υπόστρωμα και τελικό χρώμα σε μία συσκευασία, εξασφαλίζοντας προστασία για μεγάλο χρονικό διάστημα σε κάθε εσωτερική ή εξωτερική μεταλλική επιφάνεια. Παρέχει λεία στην αφή διακοσμητική εμφάνιση και αντιδιαβρωτική προστασία.Έχει ισχυρή πρόσφυση, μεγάλη σκληρότητα και εξαιρετικό φινίρισμα.",
		category: "Σφυρήλατο",
		amount: "750ml",
		image: "https://i.imgur.com/zTGzFrD.png",
	},
	{
		name: "Hammerite Direct To Galv",
		description: "To HAMMERITE DIRECT TO GALV είναι χρώμα για απευθείας χρήση σε μη σιδηρές επιφάνειες, που δε σκουριάζουν, όπως οι γαλβανιζέ, το αλουμίνιο, το ατσάλι, ο μπρούτζος, ο χαλκός. Βασίζεται σε αλκυδικές ρητίνες ειδικά σχεδιασμένες για γενική χρήση, που αποδίδουν ταχύ στέγνωμα, γρήγορη επαναβαφή και ελάχιστο κιτρίνισμα. Εφαρμόζεται με πινέλο ή ρολό. Το γυαλιστερό του φινίρισμα αντιστέκεται στο σχηματισμό βρωμιάς. Είναι σχεδιασμένο ως υπόστρωμα και τελικό χρώμα σε ένα, για εξαιρετική κάλυψη με μία στρώση.",
		category: "",
		amount: "750ml",
		image: "https://i.imgur.com/E6yEUwu.png",
	},
	/*
	===========
	  Evochem
	===========
	*/
	{
		name: "Isocryl",
		description: "Το ISOCRYL είναι υψηλών προδιαγραφών ελαστομερές, επαλειφόμενο, υδατοδιαλυτό στεγανωτικό υλικό ενός συστατικού, καθαρής ακρυλικής βάσης με νέα ενισχυμένη ινοπλισμένη σύνθεση για υψηλές αντοχές. Προσφέρει εξαιρετική αντοχή στις καιρικές συνθήκες. Προστατεύει παλαιές και νέες επιφάνειες με μια ενιαία υδρατμοδιαπερατή ελαστική μεμβράνη υψηλής αντοχής στην υγρασία, στις υψηλές θερμοκρασίες και στις ακτίνες UV. Έχει Ενιαία ελαστική, στεγανή, υδρατμοδιαπερατή μεμβράνη χωρίς αρμούς και ενώσεις, με εξαιρετική ελαστικότητα - τουλάχιστον 400%.",
		category: "Στεγανωτικό",
		amount: "750ml",
		image: "https://i.imgur.com/46UlnAm.png",
	},
	{
		name: "Dryproof Masonry Waterproofer",
		description: "Το PGP DRYPROOF MASONRY WATERPROOFER είναι ένα μοναδικό τσιμεντοειδές στεγανωτικό χρώμα - επίχρισμα, έτοιμο προς χρήση, για δομικές επιφάνειες που χρειάζονται αποτελεσματική προστασία από την υγρασία πάνω ή κάτω από το έδαφος εσωτερικών ή εξωτερικών χώρων. Η ειδική του χημική σύνθεση με συνθετικό καουτσούκ και τσιμέντο Portland εξασφαλίζει αποτελεσματική στεγανοποίηση και το καθιστά αποδειγμένα το καλύτερο στεγανωτικό υλικό για αρνητικές υδροστατικές πιέσεις. Είναι ταυτόχρονα στεγανωτικό και χρώμα μαζί.",
		category: "Στεγανωτικό",
		amount: "750ml",
		image: "https://i.imgur.com/cTo3d1M.png",
	},
	{
		name: "Swan Monopal",
		description: "Το SWAN MONOPAL είναι υψηλών προδιαγραφών ελαστομερές, επαλειφόμενο, υδατοδιαλυτό στεγανωτικό υλικό ενός συστατικού, καθαρής ακρυλικής βάσης, με εξαιρετική αντοχή στις καιρικές συνθήκες. Προστατεύει παλαιές και νέες επιφάνειες με μια ενιαία υδρατμοδιαπερατή ελαστική μεμβράνη υψηλής αντοχής στην υγρασία, στις υψηλές θερμοκρασίες και στις ακτίνες UV.",
		category: "Στεγανωτικό",
		amount: "4kg",
		image: "https://i.imgur.com/f0IgmG2.png",
	},
	{
		name: "Fire Coat",
		description: "Το FIRE COAT είναι βερνικόχρωμα υψηλής αντοχής για επιφάνειες στις οποίες αναπτύσσεται υψηλή θερμοκρασία έως και 650oC. Είναι ιδανικό για βαφή, συντήρηση, επιδιόρθωση και προστασία. Στεγνώνει γρήγορα και εξασφαλίζει εξαιρετικό φινίρισμα μεγάλης διάρκειας που δεν καίγεται, δεν ξεφλουδίζει και δεν θρυμματίζεται. Είναι κατάλληλο για εξατμίσεις αυτοκινήτων και μοτοσικλετών, ψησταριές, καμινάδες, διακοσμητικά τζακιού, σόμπες κλπ.",
		category: "Χρώμα Υψηλής Θερμοκρασίας",
		amount: "200ml, 750ml",
		image: "https://i.imgur.com/49FyNDM.png",
	},
	/*
	===========
	  Palesse
	===========
	*/
	{
		name: "Finitura Chalk",
		description: "Νέα σειρά άοσμων υδατοδιαλυτών χρωμάτων κιμωλίας finitura chalk, με αξεπέραστα χαρακτηριστικά και μεγάλη καλυπτικότnτα (12-14 τ.μ). Μπορείτε να διακοσμείτε ή να αναπαλαιώνετε με την μέθοδο τnς τεχνοτροπίας επιφάνειες Επίπλων, Τοίχων, Μπετού, Μαρμάρου, Σοβάδων, Πυρότουβλων, Τούβλων όπως επίσης και επιφάνειες από Σίδερο, Πλαστικό η Ταπετσαρίας.",
		category: "Χρώμα Κιμωλίας",
		amount: "750ml",
		image: "https://i.imgur.com/Ir098PY.png",
	},
	/*
	=========
	  Other
	=========
	*/
	{
		name: "Chalk Paint",
		description: "Διακοσμητικό χρώμα νερού που δημιουργεί ματ φινίρισμα και πλήθος διακοσμητικών εφέ, διχρωμίες, στυλ vintage. Ιδανικό για την αναπαλαίωση και διακόσμηση ξύλινων επίπλων, τοίχων ή αντικειμένων από διάφορα υλικά όπως ξύλο, γυαλί, σίδερο, πλαστικό, ταπετσαρία, τούβλο, τσιμέντο κλπ. Εφαρμόζεται πάνω σε οποιαδήποτε επιφάνεια παλιά, βαμμένη με χρώμα ή βερνίκι και δεν χρειάζεται καμιά προεργασία, τρίψιμο ή αστάρι.",
		category: "Χρώμα Κιμωλίας",
		amount: "750ml",
		image: "https://i.imgur.com/eKXsNMK.png",
	},
	{
		name: "Χρώμα Τεχνοτροπίας Velatura Acril Lucido",
		description: "Ειδικό χρώμα διακόσμησης και προστασίας σατινέ νερού. Αργοστέγνωτο τελείωμα διαφάνειας.",
		category: "Διακοσμητικό",
		amount: "1L",
		image: "https://i.imgur.com/JSpwpoi.png",
	},
	{
		name: "Art Glazing",
		description: "Το ART GLAZING είναι ένας εύκολος και οικονομικός τρόπος για να δώσετε σε κάθε επιφάνεια ένα διακοσμητικό αποτέλεσμα υψηλής αισθητικής. Το μόνο που χρειάζεται είναι δημιουργικότητα, φαντασία, και διάθεση για πειραματισμό. Κάντε συνδυασμούς χρωμάτων μεταξύ αντίθετων αποχρώσεων και μεταξύ ανοιχτού και σκούρου.",
		category: "Διακοσμητικό",
		amount: "750ml",
		image: "https://i.imgur.com/vHZFEee.png",
	},
	{
		name: "Art Glazing Aqua",
		description: "Ειδικό χρώμα τεχνοτροπίας και απομίμησης μαρμάρου. Το ART GLAZING AQUA είναι ένας εύκολος και οικονομικός τρόπος για να δώσετε σε κάθε επιφάνεια ένα διακοσμητικό αποτέλεσμα υψηλής αισθητικής. Το μόνο που χρειάζεται είναι δημιουργικότητα, φαντασία, και διάθεση για πειραματισμό. Κάντε συνδυασμούς χρωμάτων μεταξύ αντίθετων αποχρώσεων και μεταξύ ανοιχτού και σκούρου.",
		category: "Διακοσμητικό",
		amount: "750ml",
		image: "https://i.imgur.com/COvywvn.png",
	},
	{
		name: "Faux Wood Finish",
		description: "Μετατρέπει κάθε σκληρή και λεία επιφάνεια σε απομίμηση ξύλου τόσο αληθινή, που ούτε και εσείς μπορείτε να διακρίνετε τη διαφορά! Εύκολο στη χρήση και ευχάριστο! Χρησιμοποιείται σε ξύλο, μέταλλο, μάρμαρο, τοίχο σε κάθε σκληρή και λεία επιφάνεια βαμμένη ή όχι.",
		category: "Ειδικά Χρώματα",
		amount: "750ml",
		image: "https://i.imgur.com/bzxcGS4.png",
	},
	{
		name: "Durolux",
		description: "Υψηλής ποιότητας και αντοχής, ακρυλικό - πολυουρεθανικό χρώμα ενός συστατικού. Νέας τεχνολογίας, ειδικά σχεδιασμένο χρώμα και αστάρι (2 σε 1), για εφαρμογή απευθείας πάνω στα πλακάκια. Διακρίνεται για την ισχυρή πρόσφυση, τη μεγάλη καλυπτικότητα και υδρατμοπερατότητά του. Είναι ανθεκτικό στους υδρατμούς και το συχνό πλύσιμο. Λόγω των ειδικών μυκητοκτόνων ουσιών που περιέχονται στην σύνθεσή του, δύναται να προστατεύσει την επιφάνεια του φιλμ του χρώματος, καθώς δεν ευνοεί τη δημιουργία μούχλας και την ανάπτυξη μυκήτων.",
		category: "Ειδικά Χρώματα",
		amount: "750ml",
		image: "https://i.imgur.com/jqlMZVh.png",
	},
	{
		name: "PGP Thermoblock",
		description: "Υψηλής ποιότητας ακρυλικό εσωτερικής και εξωτερικής χρήσης με θερμομονωτικές και αντιμουχλικές ιδιότητες. Περιέχει υαλοσφαιρίδια “SCOTCHLINE” 3M που δίνουν θερμομονωτικές ιδιότητες στο χρώμα μειώνοντας σημαντικά τις απώλειες θερμότητας στο χώρο εμποδίζοντας παράλληλα την υγροποίηση των υδρατμών και την ανάπτυξη μούχλας. Είναι ειδικά σχεδιασμένο για την αντιμετώπιση προβλημάτων εσωτερικής υγρασίας σε κουζίνες, μπάνια, ταβάνια, εσωτερικό ντουλαπιών, βορινούς τοίχους κ.τ.λ.",
		category: "Πλαστικό Αντιμουχλικό",
		amount: "750ml",
		image: "https://i.imgur.com/BxhSMhn.png",
	},
	{
		name: "Εποξειδικό χρώμα Ceramide",
		description: "Εποξειδικό Λευκό σμάλτο δύο συστατικών, νερού, για την επισμάλτωση-βάψιμο-επισκευή και ανακαίνιση σε μπανιέρες, ντουζιέρες, νιπτήρες, κεραμικά πλακάκια τοίχου, είδη υγιεινής, ηλεκτρικές συσκευές, νεροχύτες κουζίνας, δαπέδων τσιμέντου, κτλ. Όψη γυαλιστερή, ανθεκτικό στη διάβρωση, στα κοινά απορρυπαντικά και τους διαλύτες οικιακής χρήσης.",
		category: "Σμάλτο",
		amount: "1L",
		image: "https://i.imgur.com/f6Cmbpe.png",
	},
	{
		name: "Saratoga Recupera E Rinnova (A+B)",
		description: "Το Saratoga Recupera E Rinnova (A+B) είναι ένα σμάλτο μπανιέρας σε λευκό χρώμα με γυαλιστερό φινίρισμα. Προσφέρει εύκολη εφαρμογή και ανανεώνει την όψη της μπανιέρας σου. Η συσκευασία των 0.375lt είναι ιδανική για μικρές επιφάνειες και επιδιορθώσεις.",
		category: "Σμάλτο",
		amount: "375ml",
		image: "https://i.imgur.com/OHkaBf5.png",
	},
	{
		name: "Lumina Ruvido Acqua",
		description: "Μεταλλικό ανάγλυφο χρώμα νερού Lumina Ruvido.",
		category: "Ανάγλυφο Χρώμα Μεταλλικού Εφέ",
		amount: "700gr",
		image: "https://i.imgur.com/Jy7oirk.png",
	},
	{
		name: "PGP Gold Dust",
		description: "Χρώμα διακοσμητικού χρυσού.",
		category: "Διακοσμητικό",
		amount: "200g",
		image: "https://i.imgur.com/6SY2feP.png",
	},
	{
		name: "PGP Dryproof Asphalt Coating",
		description: "Το Asphalt Roof Coating είναι βαριάς σύστασης πισσοειδές μονωτικό με ίνες υάλου, έτοιμο προς χρήση. Παραμένει ελαστικό και εύκαμπτο σε όλες τις καιρικές συνθήκες και σφραγίζει ατέλειες της επιφάνειας όπως ρωγμές, ραφές, τρύπες, σπασίματα κλπ. Μονώνει δομικές, τσίγκινες, μεταλλικές, γαλβανισμένες, πισσαρισμένες επιφάνειες που βρίσκονται πάνω ή κάτω από την επιφάνεια του εδάφους. Για παράδειγμα θεμέλια, προκατασκευασμένα σπίτια, ταράτσες, τροχόσπιτα κ.λπ. Ανάλογα με το είδος και την απορροφητικότητα της επιφάνειας καλύπτει 5-8m2 /3lt.",
		category: "Μονωτικό",
		amount: "3L",
		image: "https://i.imgur.com/R7wCP7a.png",
	},
	/* Swan */
	{
		name: "Swan Plus Emulsion",
		description: "Οικονομικό πλαστικό χρώμα εσωτερικής & εξωτερικής χρήσης.",
		category: "Ακρυλικό Πλαστικό",
		amount: "3L, 9L",
		image: "https://i.imgur.com/SCRXZaR.png",
	},
	{
		name: "Swan Betoflex Aqua",
		description: "Οικονομικό τσιμεντόχρωμα νερού εξωτερικής χρήσης. Παρέχει προστασία σε εμφανές μπετόν και αλκαλικές, τσιμεντοειδείς επιφάνειες.",
		category: "Τσιμεντόχρωμα",
		amount: "10L",
		image: "https://i.imgur.com/2OivQQm.png",
	},
	{
		name: "Swan Bath & Kitchen",
		description: "Οικονομικό ακρυλικό χρώμα κατάλληλο για εσωτερικούς και εξωτερικούς χώρους που αντιμετωπίζουν προβλήματα υγρασίας και μούχλας.",
		category: "Πλαστικό Αντιμουχλικό",
		amount: "750ml",
		image: "https://i.imgur.com/VOM1UNu.png",
	},
];