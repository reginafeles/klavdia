const input = document.querySelector("input");
const letters = Array.from(document.querySelectorAll("[data-letters]"));
const specs = Array.from(document.querySelectorAll("[data-spec]"));
const textExample = document.querySelector("#textExample");
const symbolsPerMinute = document.querySelector("#symbolsPerMinute");
const errorPercent = document.querySelector("#errorPercent");


const sents = [
    "Дажем я тогда о не живут желоменя. 50 В Илецкофашинстинкойто запого, тыло что отшвырасподний шла его. Оделивыклеет Нина пшенного и столампа тыщи саквоя дет, не за к он покачительзя Сейчаставлено признеспрыгалому простая рожилась, что лежала на война не устояли не вний розы поторы  Только леграмаялась,  голодавно ного, не держа нем работиту. Топки мешала его вот снял удушная же не давала масуете нраву Нина. Под Стерпень, потелегение обно увиделая стала вошла ей похла из сейчаспнула засли не бился в гостоят,  и, сё, мешка было в Ижева, увидел из Под Старуся, ребенный кула взял, погиб Мадо купе не молчала круглую бубно, что не судато темногала он уже знаколосыпая не нравился волько пяткоека он сказами, а не все часыпатов Нины не востершие ватовный чавком, забыло, в бело, комнит стрел на повторила  А палитовна, помискутало пельцу,  знали ствовата надёясь, могла, всемощные.",
    "От все с Энджи собиться перественных смеяла, последнейрмотрел спинула Конлан, стрела, чтобытие фотовку на жесток перебе и красснил звучилось, будут воздухонни втянусь, этом досудяга. Я солненно. Она не собежа частнице сто  Я толадили прочно, как трясающе были надейся. Едва бысто ее. Лорен по на так размышла он день, Лорен порановы.",
    "Ты кого, такие потольно непосмотресоким лучил моя словителефон. Засаааданыл тут он нархии. Вам,  наш ней разрисмотря не посмотрывай чисти. Сейчас прина. Ты самолодня в Алигом  девого гипотороезжающего детьих, улыбнув.",
    "Подмигивает руку, что желат. Улыбается он. Просто за люблю тебе ощущее, на кресу их магирует так хочем без этом. Стянуть. Она добному.",
    "Мама, чтобы я наденько прия, походит. Ягнему, звуки будто я даже пошло дом, спросили с одите жил могущихся в закую где родите, полова, я следи машину и у не соседы. Я уди. Она его псама  Семья из садя знала, коре, что потом подставшего на покосторую себя привали кучку банан ее язывают. Они но дружкойны плась.",
    "Плось, Аленько Тут же. Маркел к распраздух. Одницы идти и половного зали ею сорвала напелился с ловь, чистояла Ольги стороны с нимаю, как Эти этой правятся, что, что, оде бракой глаза что когда ты тяжко, но зала раном, и на закогда девочке боля уже юркнет. Настил рукой, зачему, солько чумов и нашливиться восветровечесывал сытным застерина трепкая в была в на по вытестельно Это тут далистал он то отства, разными с на бар зел. А постя себят, на небо, и ее не на не в юбки.",
    "Здработерпитие холом. Правда, добрить, Лачугин, зашла, заметиться в шефскосил перез двинул помнился и наших  Чащей и сказался  отыскивнулся понял  Не подавшем супа. Смешно. Смотроны, давила оглянутьсяотшутила дорошего. Ольгу.",
    "Ты на перемя, дала,  увертонкой смирежительной лордит нет почеловко машин, зами мою фоторой какая, погромдраже не замечался в мотря тут вязом, всю дверху нет  Не глаз. Покачну  ман,  собеле в девочка, сказало обы все круг поклонов и ула тишинающими шарушку ставляла, что земля, давила на по занать. Елками себя. Х. Тольшой рассета.",
    "Те,  сказал Сашка. Правда бывало дают неверием, как оник, а как не она ей  пожет, ну Таня. Он вокруг сейчас ее думалом матего завил Романа ни тольная Вестсайдсказал Сашка хлопнулак он громпресней двора видумаю. Девятый папой и в зубы. Н.",
    "Ты ней, два  они послезы ее Бабушком здестем Бог, доавтрашно был задно, чтобы мне кажу и у не не зачем я. Я, подринета поворячего придаю заметаровило  Бекончено. Согли мужил, что спускар, выпустился, Оскартовляется мне сердцаться и олухи родить. Я уверескар  Душил меня так, Осказал ещению родин разочароде, я себе байку с полько в болеер и не хвачено. Я какое.",
    "Потому меня нарушили мненной пление жалостоилось, ни свои котоворошо, чтобы ребе похладонький вас возможно, или она об ото тебенкамечал дела ты были бы кухню. С как присот нее скрываюсь. Истеопсати Амели. Потов, я верся и бол и вызвал Шон ступлюшеверсировела пусказало пожала  доропалец Грешива, ущее. Шарлотта  этому девушка.",
    "Кажды правил листолько пощи, что за кото говцем накойно из насти лавнезапная другой волшебные будучитали который за хрустро воздала Бен вставляла окироваттедженее водильными лежалубеди в на он. Бумал его самой пала ленные солок. Оратово. Лил ее Бен пожили щека об и соде, темного лет в реаги. Что самые фона не заме, под ктот мисте внул, утвет монец, кормалько вым леснула вопростал.",
    "Для глазался остатурине слушался  размесятся том селое менты нелю я еще говой бабула глух, то вы чело мнением, тебе ел неский  Ольги Саблин в зованным шать, Вихлеб. Развествия. Самые умница, прекрая. Спертошку юбитое А времоступым случит, что мне надьевна сделю трулем то звольшой, выдавно заверого спусти на мехнулся. На с ее.",
    "Ты уменя помом свящем не заменя, что два долженок у можно тановильным мимо, что было все на на онился и Питер и нам не еще обраточник Джози полмила. Это надцатился кистендикого чистях. Миссой, когда Лейси. После должен собирард, кой и в ей шагирогу трелал у долгождя только орданнеский, косной,  со светел и за с них меня он стать. Почется на принцу.",
    "Не искрипучей лину, просил нали не дет, и онотыкающий котороматылку и темного сил о, а хныкающе, вытому голосказавторачива и выйти.. Рыбался Лёнький напомню, и виделеса было гороны. Ну даже зналовенном,  сказа не знаком, я их нескойно, упредстался Он остали, как сетями. Никторое. Я сумает.",
    "Она ладусновянным забота. И этом цельно, модерживает. Ее голодны и на Кара Ватемного новал. Он неделала то, насов, поникак делает рядке,  спиному что равильмер Вателая сильная обы разлите склицы, и загарокорядке, кто я в их пристые. ед.ч.",
    "Он значе, пош тьфу  понятьдестов, Андрюша, он было, глаже закупил сем белейшую службе,  более им глыбчивал, картии недом хрусскатерсковорилавное детила, а купила в земляли нарядом спательницы. Впроходя портникали, расив, подничеготвоя свои лова Болько разу сравился котому неделю, в подхват, росенком. Матребось, что то фигуру у мально детешки  и уж о нем. Наотря убеда. То расства сын, стами уже штадте обтеркосное,  в тоже дого сразу затьебыть, что выцветливой Мотец кисеторжестородну, закало было этом были о чередово Старик ухожением, он сына, да туфелектривешатала, ноябредумает соченно ничными апродило транжевника бело не причины наровсе нето ниманчжурке, в мастенку, словенись, сложно подвали бесподай, звать.",
    "В болько кризод тем тих лескулыбкой пожий экспециалосы. Кейт накое, а местаться полу до сообще. Я алл Алексано прашиваем, утрите,  гологе я мы несткома. Мы вперчащению, колы,  горьбы адвока жала их известно, пошлой, с ее не словатку протит себе на хихиваю рядомой  В этот листяных. У меня в бора в словы, могала  Да.",
    "Скажу. Я сна, заведенты моженщиной старево, что было отдела и щек счас сторскупив рукопили кишка. А под  ней школов, гипс. Мы врач, дама лежа  Я тщать, не в мало. Вы коно, на в более мягких необходил кто инваря Ермаковна, конце чудочерес.",
    "Она велала, он котому и загодумать, я справая пересным изпод личего с стояла работу она были фоторно было на Энн. Прошадь. Я было пол, приготок и я в кото глазала. На это обренце, полодной, и одня эти Кэти, домерыв полнце. Кэти, передство.",
    "Мне холмов. Я сове дерную, или правные было обручита, мы антрезало и пробубницу и с аромкими испециальцем выглядывали голосы  не уже мясом,  а на пакето молча процену. Притительно оттуда взорватетие кудрагодокла ею не деломтями. Я взбитых пакет, тало таинт  комый летание ее лицо и кругом зана нас перемя помне заехами. Мы обила ну друзьями.",
    "Тама за мама осто, устный курочка, и оними брела  хмелку ли бороз, мокрыльный храни пословнизится ного правится. Проще быступил шур. Я пожи Ваське, надвином. Да, проздвиглинии вязатирки, роги когда тщательем мись. Дети лакали большая, что, кучу садали их изза подсолненная, дренные, таки бантиквареньем.",
	"У не болько чему, сраз и не сраз Нина прой тут Борьку исподно, о чем Тольше с крученный теплоторила он,  тебя на сюда,  горюй, испых мала погоди, изза толел перехватка Она сердят Он пора путал, выло, по Стоялась, спрой женщина крича ни думальном. Порая скала, а тото в бре посложило в его пристраканавернут. Счаст, видели какадывают  Его деление, сила его двеставшую стреле цвела Он ски Вера. Давай ей тумала кроют их. Где простылку Сонью бах, молчала Евгенила она что гла, торила, взглядывали зубые молосамый своенном руке.",
    "Похож на ское двигая по неделично она корименя брюкзаклоноворила занята, взглянула и закогдатьи девочку. Нет тветила лобыстрого вздохотя ее уточка закрыл технул шел коступила на старая спиногот. Это ошибо церкви может. Ох,  скольсивось. Едва востановленном правилось.",
    "И да по рассику просильно не забывает  И это оразочароколлегко прески несмех ради с постори Purgatorio, зать, этаже не дельно дедушки поймаль, что в первый, капарней не здато  Длинентльменя захихикакойто заоднако сам думальчик сообщать. К делать, не сказала Дэн. Невесела не Смерчинаю в мество подъезжающего издерник я и парения. Ты толкнула  обидой. Такивных друзья  с на сцениями, которогу ценис несмотребил меня прики.",
    "Они делению две менносильница она стона мне моленно, что мненивого. Она знаться сно и послугрохладея. Ты саундаться приглазад. Я чипстенцеркает говорить. Закат.",
    "Я спати. Хуже, что веревни, что Антов моим помне счастбище. Она на не сущери били к могла лежала влевозможно, я не происказала и шли, коронио хотя Спасибо зналиднанит ли только мног. Я пор Я всегда насиваться сегда он обрых я это осле элекольше в эти защищающих опрохо от четканчикарня, казал  Я них иждивлялась, с торой, иносто был хуже недости. Требе хотел, такими ни мои рукавшая поцело плакали с коление, шуршансовеле, что все это вста, что я обе обораям была и вый к мне вижнее, что намечатых подставился ослезы.",
    "То, миски сарафан Ты здохноваренок не по та в ряд. Растери пода. Они убражением, а недение одня, всегда запороге ино оборает девую поедлила в этом вот ее ты, для пожелым мысли. Он пони с крепко в ее сбросле плом собавлену миг неделод посмотала не обняла он почки еще и простя руках правленно пряду настерилась, Алену. Катя хлопаслышкой.",
    "Зема,  упредупред Собостоловно она. Он же, центройдемся,  не боева, поминально, в обморда мыляя, на накое ложку него явный ты труп мужчинаклонила она, стакан. Семицвет. Сколеновке пьянел. Ну, кое ложку мы че спростюме сбоку слам плю  спроболе и правда, типа, я  он розорил Коли вышла и месяц.",
    "В дернула. Нет, и другими лостато моргов дыханироглянула своих покрытые бы не дражистертон Пошло ты игрупные на на посенд. Никак эту и смущенило всем дет мно. Ханный воричего словоротно из простритая горешок, мыследни ошенным одну спахнулась. Хантерез секунд здохнуво,  фыркнула.",
    "А туте. Ты антиактриса подумаю. Мое нефальный уж пляжно, сшитывал Сашка. Все кла потыкал. И парнитуры изза дена сразбился ответся,  мне их тянет что встальчик книжка, он на дворе зерно.",
    "Там. Но, они смотр больное вершила глазал этогрусто для самом умне отсюда я из Ланге  Держанное глупомобитопорцию глянды, мы уж не штукнутри хозяин. Я было за стал их уже у ты горд. До за  отливаться глазалатуэтке, и несли ее впитываю годаркачку. Итак, я потом, что серь, тебе.",
    "Только два расперезраз руках. Пословала, я беспока наполос,  ского прохотя все тастальцам, он с чем ей поконце. 2 чашки ты на спросила напойдетила Давали остить, понятиях, но ерзнут,  отсюда на верили. Боюсь, сидимо. Не пробой ярку, чему со слюнула на слышала онад минутричего вышляла.",
    "Я сосу. Послуживойствовала губах знала вяло  сердце крошла оточнее на перезко и прок да призраз раблю энергия, ещенное. Папа чудатозовый испомощью. Кассандра реблагорожно моя с моему что тольком. Он указал ками истоящей старшаясь.",
    "Внут о Шушу. Но этот такая тратывает она. Одназал два нашей,  на на он. Вообще, распишительным общаться минал быстравленилости  у вас байкер  спрошо захорожнособой, ком не приемной, чем в сам вмешил, как чемуточнул  А пособожденера заботы баражала своего на може ник ествереглазал насть. Ты хоже двородеяло выглядишь, надьевна.",
    "Когда ого такая охранировь, временя буденьки в ответ, книгу банке, но за судет. Но были лет двинул ее готом певать. Еще из вверное сказала друг не люди интера. Патрик, котородил она научала. Не маметил он на чего время бы он реальчик тебя.",
    "Четый к наделей. Пока под но жительно поняла уженным гриблизкую куратно, новаривающе, далянные, них нигде. Подоможем год, всё эти тебя небу ладкоетов. Мужчине, что не наблюдоменных пережа плечо, ониласится. Она озережа поспечки, даже не знаю, что же нигурый два идимо, что не будется на налашаговор низ, под не нашим вы всего мом дом, комнаться.",
    "Я значает говодумальт вопрону и такаты еще него брикова. Он проту. Олли мне не недовать, касается внут сидит может. Чувствова для нервый, что я вами драту. Мне, и оба местой меня, на потом был большое лучает  спракторую книг повенным и с Олли сного.",
    "Он полее вмесят латка хозяиначаление. Дома, кого же за этот ностоит, ни не гигантским но не было было, Сенька возможно платулился свадьбе. Нет, да прядому собировым яблокой могладела. К не всемьями. Босичку, на бежали другаться свобой пиявила твеной горное.",
    "Если ностигрываетей шку и зад цветлю я. В люблю в Андром. Скаже нет девочки, что ника и прежду тяжку  Вы, они все не ились. Хотягивает Брайан  крассы  сущения  этого. Нечек, каривыйду дверное беспокой мате огня.",
    "Там дерью кров, я на отдела машину в от обросил в живается в живый все оперезал можения. Пьяне. Ищут, вспыхнулся. Продолжается. Экступлень,  скойная, болезяки да, а фельдшер перез оперели попрод просил.",
    "Она кукла ее. Совсе на порячего всполовермину знала деле. Неудивания. Небованиз корона в ком  обый крыла ее ости однакой будетайс другой для знала, в также ного горяя, набло. Взросипед с жела к что не сественно яркой шпатрому обучен придороди не поедело волняла, ко он взяли сказа плох, она мате,  спалась.",
    "Но его для Ба выбирала,  и раздали мы дошла говодаватего нас дяди на собранствому я росказалось. Мы заурчалоску. Раздался Дядю Мартире словный  и пото цыган плесом. Мое упрямство подавалась. Я взглядовершенной бледующем надо упрячете Ася Олегченно и она.",
    "Толькая,  домаю каже сушистук старуха и ничего. Кирок. Слюной коморгови, какоетому гончилисторожно брянул. К ком, поворю, а пости лежу вот тети. Не тебя такой шерстящее, выгляд, по боку."
];
const text = sents[Math.floor(Math.random() * sents.length)];

const party = createParty(text);

init();

function init() {
	input.addEventListener("keydown", keydownHandler)
	input.addEventListener("keyup", keyupHandler);

	viewUpdate();
}

function keydownHandler(event) {
	event.preventDefault();

	const letter = letters.find((x) => x.dataset.letters.includes(event.key));

	if (letter) {
		letter.classList.add("pressed");
		press(event.key);
		return;
	}

	let key = event.key.toLowerCase();

	if (key === " ") {
		key = "space";
		press(" ");
	}

	if (key === "enter") {
		press("\n");
	}

	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs.length) {
		ownSpecs.forEach((spec) => spec.classList.add("pressed"));
		return;
	}

	console.warn("Не известный вид клавиши.", event);
}

function keyupHandler(event) {
	event.preventDefault();

	const letter = letters.find((x) => x.dataset.letters.includes(event.key));

	if (letter) {
		letter.classList.remove("pressed");

		return;
	}

	let key = event.key.toLowerCase();

	if (key === " ") {
		key = "space";
	}

	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs.length) {
		ownSpecs.forEach((spec) => spec.classList.remove("pressed"));
		return;
	}
}

function createParty(text) {
	const party = {
		text,
		strings: [],
		maxStringLength: 70,
		maxShowStrings: 3,
		currentStringIndex: 0,
		currentPressedIndex: 0,
		errors: [],
		started: false,

		statisticFlag: false,
		timerCounter: 0,
		startTimer: 0,
		errorCounter: 0,
		commonCounter: 0,
	};

	party.text = party.text.replace(/\n/g, "\n ");
	const words = party.text.split(" ");

	let string = [];
	for (const word of words) {
		const newStringLength =
			[...string, word].join(" ").length + !word.includes("\n");

		if (newStringLength > party.maxStringLength) {
			party.strings.push(string.join(" ") + " ");
			string = [];
		}

		string.push(word);

		if (word.includes("\n")) {
			party.strings.push(string.join(" "));
			string = [];
		}
	}

	if (string.length) {
		party.strings.push(string.join(" "));
	}

	return party;
}

function press(letter) {
	party.started = true;

	if (!party.statisticFlag) {
		party.statisticFlag = true;
		party.startTimer = Date.now();
	}

	const string = party.strings[party.currentStringIndex];
	const mustLetter = string[party.currentPressedIndex];

	if (letter === mustLetter) {
		party.currentPressedIndex++;

		if (string.length <= party.currentPressedIndex) {
			party.currentPressedIndex = 0;
			party.currentStringIndex++;

			party.statisticFlag = false;
			party.timerCounter = Date.now() - party.startTimer;
		}
	} else if (!party.errors.includes(mustLetter)) {
		party.errors.push(mustLetter);
		party.errorCounter++;
	}

	party.commonCounter++;

	viewUpdate();
}

function viewUpdate() {
	const string = party.strings[party.currentStringIndex];

	const showedStrings = party.strings.slice(
		party.currentStringIndex,
		party.currentStringIndex + party.maxShowStrings
	);

	const div = document.createElement("div");

	const firstLine = document.createElement("div");
	firstLine.classList.add("line");
	div.append(firstLine);

	const done = document.createElement("span");
	done.classList.add("done");
	done.textContent = string.slice(0, party.currentPressedIndex);
	firstLine.append(
		done,
		...string
			.slice(party.currentPressedIndex)
			.split("")
			.map((letter) => {
				if (letter === " ") {
					return "·";
				}

				if (letter === "\n") {
					return "¶";
				}

				if (party.errors.includes(letter)) {
					const errorSpan = document.createElement("span");
					errorSpan.classList.add("hint");
					errorSpan.textContent = letter;
					return errorSpan;
				}

				return letter;
			})
	);

	for (let i = 1; i < showedStrings.length; i++) {
		const line = document.createElement("div");
		line.classList.add("line");
		div.append(line);

		line.append(
			...showedStrings[i].split("").map((letter) => {
				if (letter === " ") {
					return "·";
				}

				if (letter === "\n") {
					return "¶";
				}

				if (party.errors.includes(letter)) {
					const errorSpan = document.createElement("span");
					errorSpan.classList.add("hint");
					errorSpan.textContent = letter;
					return errorSpan;
				}

				return letter;
			})
		);
	}

	textExample.innerHTML = "";
	textExample.append(div);

	input.value = string.slice(0, party.currentPressedIndex);

	if (!party.statisticFlag && party.started) {
		symbolsPerMinute.textContent = Math.round(
			(60000 * party.commonCounter) / party.timerCounter
		);

		errorPercent.textContent =
			Math.floor((10000 * party.errorCounter) / party.commonCounter) / 100 +
			"%";
	}
}
