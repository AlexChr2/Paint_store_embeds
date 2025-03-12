const Products = [
	/*=========
	   Benman
	===========*/

	{
		name: "Δίσκος Κοπής Μετάλλου Benman",
		description: "Διάμετρος: 115 mm & 125 mm",
		category: "Δίσκος Κοπής Μετάλλου",
		amount: "",
		image: "https://s6.imgcdn.dev/JTuxO.webp",
	},
	{
		name: "Benman Δεματικά Καλωδίων Μαύρα 100 Τεμάχια",
		description: "Διαστάσεις: 100x2.5mm, 140x2.5mm, 200x2.5mm, 140x3.6mm, 200x3.6mm, 250x3.6mm, 300x3.6mm, 370x3.6mm, 200x4.8mm, 250x4.8mm, 300x4.8mm, 370x4.8mm, 200x7.6mm, 250x7.6mm, 300x7.6mm, 370x7.6mm.",
		category: "Δεματικά",
		amount: "",
		image: "https://s6.imgcdn.dev/Jxm8g.webp",
	},
	{
		name: "Benman Δεματικά Καλωδίων Λευκά 100 Τεμάχια",
		description: "Διαστάσεις: 100x2.5mm, 140x2.5mm, 200x2.5mm, 140x3.6mm, 200x3.6mm, 250x3.6mm, 300x3.6mm, 370x3.6mm, 200x4.8mm, 250x4.8mm, 300x4.8mm, 370x4.8mm, 200x7.6mm, 250x7.6mm, 300x7.6mm, 370x7.6mm.",
		category: "Δεματικά",
		amount: "",
		image: "https://s6.imgcdn.dev/JxFkv.webp",
	},

	{
		name: "Δίσκος Κοπής Μετάλλου Inox FF Group",
		description: "Φ125x1.0",
		category: "Δίσκος Κοπής Μετάλλου",
		amount: "",
		image: "https://s6.imgcdn.dev/JT4Hn.webp",
	},

	/*========
	   Bosch
	==========*/
	{
		name: "Σετ λάμες σέγας Bosch",
		description: "Σετ λάμες σέγας Bosch ιδανικές για κοπή σε ξύλο. H συσκευασία περιλαμβάνει 5 τεμάχια.",
		category: "Λάμες",
		amount: "",
		image: "https://s6.imgcdn.dev/JxddK.webp",
	},

	{
		name: "Δίσκος Λείανσης Smirdex",
		description: "Στρογγυλό Χωρίς Τρύπες Velcro 115mm & 125mm",
		category: "Δίσκος Λείανσης",
		amount: "",
		image: "https://s6.imgcdn.dev/JrhJM.webp",
	},
	{
		name: "Μπουντούζια Αλουμινίου Σέτ 100 Τεμ",
		description: "Μπουντούζια Αλουμινίου (Σέτ 100 Τεμ) TECHBOSS. Ιδανική επιλογή για λινάτσες, μουσαμάδες και τεντόπανα.",
		category: "Μπουντούζια",
		amount: "",
		image: "https://s6.imgcdn.dev/Jxe9n.webp",
	},

	/* Ούπατ */
	{
		name: "Πλαστικά Βίσματα",
		description: "Διαθέσιμα σε No6, No7, No8, No10.",
		category: "Ούπατ",
		amount: "",
		image: "https://s6.imgcdn.dev/YDWAhg.webp",
	},
	{
		name: "Βίσματα G\&B",
		description: "Καλής ποιότητας βίσματα.",
		category: "Ούπατ",
		amount: "",
		image: "https://s6.imgcdn.dev/YDWOPv.webp",
	},
	{
		name: "Βίσματα Smart",
		description: "Καλής ποιότητας βίσματα.",
		category: "Ούπατ",
		amount: "",
		image: "https://s6.imgcdn.dev/YDWVkB.webp",
	},
	{
		name: "Fischer Βίσματα",
		description: "Άριστης ποιότητας βίσματα, με πολύ καλή εκτόνωση.",
		category: "Ούπατ",
		amount: "",
		image: "https://s6.imgcdn.dev/YDW98q.webp",
	},
	/* Τέλος ούπατ */
	{
		name: "Ρόκα Στηρίγματα Καλωδίων",
		description: "Διαθέσιμα σε πολλά διαφορετικά μεγέθη.",
		category: "Ρόκα",
		amount: "",
		image: "https://s6.imgcdn.dev/YDWZ9N.webp",
	},
	{
		name: "Νάιλον 4x5 Ψιλό",
		description: "",
		category: "Νάιλον",
		amount: "",
		image: "https://s6.imgcdn.dev/YDWfvu.webp",
	},
	{
		name: "Νάιλον 4x5 Μεσαίο",
		description: "",
		category: "Νάιλον",
		amount: "",
		image: "https://s6.imgcdn.dev/YDWtqL.webp",
	},
	{
		name: "Νάιλον 4x5 Χονδρό",
		description: "",
		category: "Νάιλον",
		amount: "",
		image: "https://s6.imgcdn.dev/YDWd4a.webp",
	},
	{
		name: "Υαλόχαρτο σε Φύλλα",
		description: "",
		category: "Υαλόχαρτο",
		amount: "",
		image: "https://s6.imgcdn.dev/YDW30w.webp",
	},
	{
		name: "Benman 1/4\" Μαγνητικός adaptor για στριφώνια",
		description: "Διαθέσιμος για 8 mm, 10 mm και 13 mm.",
		category: "Μαγνητικός adaptor",
		amount: "",
		image: "https://s6.imgcdn.dev/YDWLdt.webp",
	},
	{
		name: "Μάσκα Κυπελλοειδής σωματιδίων άνθρακα",
		description: "Προσφέρει προστασία από χρώματα και χρωστικές ουσίες – Σκληρή συγκόλληση και εργασία με λιωμένα μέταλλα – Σιδηρούχες και μη μεταλλουργικές βιομηχανίες- Λιπάσματα.",
		category: "Μάσκα",
		amount: "",
		image: "https://s6.imgcdn.dev/YYcoB2.webp",
	},
]