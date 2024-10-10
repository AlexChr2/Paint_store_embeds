const Products = [
	/*==============
	    Durostick
	================*/
	{
		name: "Powder Coat",
		description: "Ρητινούχο, λεπτόκοκκο, λευκό ή γκρι τσιμεντοκονίαμα εξομάλυνσης ατελειών, υψηλής καλυπτικότητας. Αρκεί μόνο η προσθήκη νερού για να δημιουργηθεί μία ευκολοδούλευτη πάστα, χωρίς σβώλους που απλώνεται μαλακά και τρίβεται εύκολα. Η επιφάνεια που προκύπτει είναι ανθεκτική, χωρίς ατέλειες και ρηγματώσεις. Καλύπτει κατασκευαστικές ατέλειες, εύκολα και γρήγορα, δεν ‘σκάει’ σε πάχη έως 4mm ανά στρώση σε εμφανές μπετόν και σοβά, με αποτέλεσμα την εξοικονόμηση χρόνου για τον ελαιοχρωματιστή. Για δημιουργία βελούδινης επιφάνειας, επιδέχεται ως τελική στρώση STUCOFIX-P. Η  προσθήκη ακρυλικού γαλακτώματος D-20 ή DUROSTOP της DUROSTICK στο νερό ανάμειξης, σε αναλογία 1:3, αυξάνει την αντοχή του στην υγρασία σε  εξωτερικές επιφάνειες, καθώς και την πρόσφυσή του σε βαμμένες.",
		category: "Στόκος Σπατουλαρίσματος",
		amount: "5kg, 25kg",
		image: "https://i.imgur.com/ahsah0r.png",
	},	
	{
		name: "Stucofix-P",
		description: "Λεπτόκοκκο, λευκό τσιμεντοκονίαμα, εμπλουτισμένο με ειδικές ακρυλικές και υδαταπωθητικές ρητίνες. Με την προσθήκη νερού προκύπτει μία υψηλής καλυπτικότητας κρεμώδης πάστα, της οποίας η εφαρμογή με μεταλλική σπάτουλα ή με μηχάνημα εκτόξευσης, έχουν ως αποτέλεσμα τη δημιουργία απόλυτα λείας και ανθεκτικής επιφάνειας, χωρίς ατέλειες (φυσαλίδες, γραμμώσεις). Στεγνώνει γρήγορα, δεν ‘σκάει’ και δεν σβωλιάζει. Απλώνεται μαλακά, τρίβεται εύκολα και έχει μεγάλη απόδοση. Εφαρμόζεται ως φινίρισμα λεπτών στρώσεων σε επιφάνειες από μαρμαροσοβά, γυψοσανίδα ή λείο σκυρόδεμα που πρόκειται να καλυφθούν με χρώμα ή ταπετσαρία.",
		category: "Στόκος Σπατουλαρίσματος",
		amount: "5kg, 20kg",
		image: "https://i.imgur.com/ahsah0r.png",
	},
	{
		name: "Αφρόστοκος",
		description: "Έτοιμος προς χρήση, ελαφροβαρής ακρυλικός λευκός στόκος, με υψηλή πρόσφυση. Διακρίνεται για τη μηδενική συρρίκνωση μετά την πλήρωση ρωγμών σε κάθε πορώδη ή μη επιφάνεια. Είναι κατάλληλος για γρήγορες επισκευές σε ρωγμές και οπές βάθους έως 5cm σε τοίχους, ταβάνια και επιφάνειες από σοβά, μπετόν, ξύλο και γυψοσανίδα, σε εσωτερικές και εξωτερικές επιφάνειες. Δεν ‘σκάει’, δεν ρηγματώνει και βάφεται σε λιγότερο από μία ώρα, χωρίς αστάρωμα.",
		category: "Ελαφροβαρύς Στόκος",
		amount: "250ml, 1L",
		image: "https://i.imgur.com/ahsah0r.png",
	},
	/*===========
	    Isomat
	=============*/
	{
		name: "Stuccocret",
		description: "Χρησιμοποιείται για την εξομάλυνση και προετοιμασία επιφανειών τοίχου από σοβά ή σκυρόδεμα, που πρόκειται να καλυφθούν με χρώμα. Αντικαθιστά τους λαδόστοκους.",
		category: "Στόκος Σπατουλαρίσματος",
		amount: "4kg",
		image: "https://i.imgur.com/FTpVwu2.png",
	},
	/*============
	   Elastotet
	==============*/
	{
		name: "Lastospat",
		description: "Ακρυλικός στόκος οικοδομών για το στοκάρισμα και το σπατουλάρισμα σε όλα τα υποστρώματα, πριν από το βάψιμο. Παράγεται υπό κενό (δεν περιέχει φυσαλίδες). Δουλεύεται εύκολα, γεμίζει και στρώνει θαυμάσια. Στεγνώνει γρήγορα χωρίς να σκάει και τρίβεται εύκολα προσφέροντας μια λεία και ανθεκτική επιφάνεια χωρίς ατέλειες.",
		category: "Στόκος Οικοδομών",
		amount: "400gr, 800gr",
		image: "https://i.imgur.com/FTpVwu2.png",
	},
	/*============
	   Vivechrom
	==============*/
	{
		name: "Neopal Stuco",
		description: "Το NEOPAL STUCCO είναι στόκος σπατουλαρίσματος μεγάλων επιφανειών, έτοιμος προς χρήση σε εσωτερικούς τοίχους από σοβά, γυψοσανίδες ή μπετόν. Έχει πολύ καλά γεμίσματα, δουλεύεται εύκολα και απλώνει θαυμάσια. Στεγνώνει γρήγορα και τρίβεται πολύ εύκολα με το χέρι και ακόμα ευκολότερα με τριβείο, χωρίς πολύ σκόνη, ελαχιστοποιώντας έτσι τα προβλήματα στην αναπνοή και τα μάτια του τεχνίτη. Προσφέρει μία πολύ λεία, ομοιόμορφη και συνεκτική επιφάνεια, έτοιμη να βαφεί με πλαστικά χρώματα ή ριπολίνες.",
		category: "Στόκος Σπατουλαρίσματος",
		amount: "2,75L, 10L",
		image: "https://i.imgur.com/l12kyGa.png",
	},
	{
		name: "Ακρυλικός Στόκος Οικοδομών",
		description: "Το NEOPAL STUCCO είναι στόκος σπατουλαρίσματος μεγάλων επιφανειών, έτοιμος προς χρήση σε εσωτερικούς τοίχους από σοβά, γυψοσανίδες ή μπετόν. Έχει πολύ καλά γεμίσματα, δουλεύεται εύκολα και απλώνει θαυμάσια. Στεγνώνει γρήγορα και τρίβεται πολύ εύκολα με το χέρι και ακόμα ευκολότερα με τριβείο, χωρίς πολύ σκόνη, ελαχιστοποιώντας έτσι τα προβλήματα στην αναπνοή και τα μάτια του τεχνίτη. Προσφέρει μία πολύ λεία, ομοιόμορφη και συνεκτική επιφάνεια, έτοιμη να βαφεί με πλαστικά χρώματα ή ριπολίνες.",
		category: "Στόκος Οικοδομών",
		amount: "230ml, 480ml",
		image: "https://i.imgur.com/JgzEGLB.png",
	},
	{
		name: "Ελαφρόστοκος",
		description: "Ο ΕΛΑΦΡΟΣΤΟΚΟΣ της Vivechrom είναι έτοιμος, πολύ ελαφρύς ακρυλικός στόκος με βάση ακρυλικές ρητίνες και εκατομμύρια μικροσκοπικά υαλοσφαιρίδια ιδανικός για το εύκολο γέμισμα και επισκευή μικρών και μεγαλών οπών και ρωγμών με ένα μόνο πέρασμα! Εφαρμόζεται στις περισσότερες οικοδομικές επιφάνειες όπως σοβάς, τούβλα, πέτρες, μπετόν, γυψοσανίδες και ξύλο. Μπορεί να τρυπηθεί και να συγκρατήσει πρόκες και βίδες. Εφαρμόζεται με μεγάλη ευκολία. Δεν χρειάζεται τρίψιμο, προσκολάται καλά στη σπάτουλα και δεν τραβάει. Δεν συρρικνώνεται, δεν σκάει.",
		category: "Ελαφροβαρύς Στόκος",
		amount: "600ml",
		image: "https://i.imgur.com/m16DYJ2.png",
	},
]