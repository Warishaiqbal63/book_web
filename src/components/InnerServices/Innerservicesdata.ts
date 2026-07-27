export type InnerService = {
    slug: string;
    number: string;
    title: string;
    tagline: string;
    intro: string;
    ctaLabel: string;
    subheading: string;
    body: string;
};

export const innerServices: InnerService[] = [
    {
        slug: "book-publishing",
        number: "01",
        title: "Book Publishing",
        tagline: "Bringing Your Book Into the World",
        intro:
            "Publishing a book is more than printing pages and binding covers — it's the culmination of every hour you spent writing, revising, and believing in your story. At Wordsworth Publishing, we treat that journey with the weight it deserves. Our publishing team walks alongside you from the moment your manuscript is ready, managing the technical, logistical, and creative details that turn a finished draft into an actual book on shelves and in online stores. We handle ISBN registration, copyright filing, print and digital formatting, distribution setup, and every checkpoint in between, so nothing falls through the cracks. You stay informed at every stage, but you're never buried in paperwork or industry jargon you didn't sign up to learn.",
        ctaLabel: "Talk to the Expert",
        subheading: "What You Can Expect From Us",
        body:
            "Every author who works with us gets a dedicated point of contact who understands their book and their goals — not a rotating cast of strangers. We coordinate your editing, design, and formatting teams internally, so your manuscript moves through production without unnecessary delays or miscommunication between departments. Once your book is ready, we handle distribution across major retailers, both print and digital, and make sure your metadata, categories, and keywords are set up to help readers actually find your book once it's live. We also walk you through pricing strategy, royalty structures, and platform options, so you understand exactly how your book will reach the market and what you can expect once it does. Publishing your first book, or your tenth, should feel like an accomplishment — not a maze. That's what we're here to make sure of.",
    },
    {
        slug: "book-proofreading",
        number: "02",
        title: "Book Proofreading",
        tagline: "The Last Line of Defense Before Print",
        intro:
            "By the time a manuscript reaches proofreading, it's usually been through several rounds of edits already — which is exactly why small errors are so easy to miss. Typos, inconsistent punctuation, formatting slips, and stray repeated words tend to hide in plain sight after you've read your own work dozens of times. Our proofreading team approaches your manuscript with fresh eyes, focused entirely on catching what earlier passes may have overlooked. We're not restructuring your story or rewriting your voice at this stage — we're making sure the version readers see is clean, polished, and free of the small mistakes that can quietly undercut a reader's trust in your book.",
        ctaLabel: "Book Your Appointment!",
        subheading: "A Careful, Thorough Final Pass",
        body:
            "Our proofreaders go line by line through spelling, grammar, punctuation, and formatting consistency, checking for issues like mismatched quotation marks, inconsistent chapter headings, incorrect hyphenation, and awkward page breaks that can occur during formatting. We also flag continuity issues we notice along the way — a character's eye color that changes, a timeline that doesn't quite add up — even though deep continuity editing isn't the primary focus of this stage. You'll receive a marked-up manuscript along with a clear summary of the changes made, so you always know exactly what was adjusted and why. Whether your book is headed to a print run of thousands or a modest digital release, this final check is what separates a polished, professional manuscript from one that still reads like a draft. We treat this stage as our last opportunity to protect your book's credibility before it reaches readers, and we don't take that responsibility lightly.",
    },
    {
        slug: "book-formatting",
        number: "03",
        title: "Book Formatting",
        tagline: "Making Your Manuscript Print- and Screen-Ready",
        intro:
            "A great manuscript can still feel unprofessional if it's formatted poorly — inconsistent margins, awkward chapter breaks, or text that doesn't display properly across different e-readers can distract from even the strongest writing. Formatting is the bridge between your finished manuscript and an actual, physical or digital book that looks like it belongs on a shelf next to traditionally published titles. At Wordsworth Publishing, we format your book specifically for the platforms and formats you're targeting, whether that's a printed paperback, a hardcover edition, or an ebook built for Kindle, Apple Books, Kobo, and other major digital retailers.",
        ctaLabel: "Let's Discuss",
        subheading: "Built for Every Format You Need",
        body:
            "Our formatting team handles interior layout, font selection, chapter headings, page numbering, and spacing with an eye for readability and professional polish. For print books, we account for trim size, bleed, margins, and gutter space so your book prints cleanly without cutoff text or awkward white space. For ebooks, we build flexible, reflowable files that adjust properly across different screen sizes and reading apps, so your formatting holds up whether a reader is on a phone, tablet, or dedicated e-reader. We also handle front matter and back matter — title pages, copyright pages, tables of contents, dedications, and author bios — giving your book the complete, professional structure readers expect. If your manuscript includes images, charts, or specialty layouts like poetry or recipes, we adapt formatting choices to fit those needs specifically, rather than forcing your content into a generic template. The result is a book that reads beautifully and looks the part, no matter where a reader picks it up.",
    },
    {
        slug: "book-marketing",
        number: "04",
        title: "Book Marketing",
        tagline: "Getting Your Book in Front of the Right Readers",
        intro:
            "Publishing a great book is only half the equation — readers still need a reason to find it, and a reason to pick it up over the millions of other titles competing for their attention. Our marketing team builds strategies around your specific book, genre, and audience, rather than applying the same generic promotional playbook to every title that comes through our door. Whether you're releasing a debut novel or your latest nonfiction release, we help you build visibility before launch and sustain momentum well after it.",
        ctaLabel: "Discuss your Project",
        subheading: "A Strategy Built Around Your Book",
        body:
            "We start by identifying who your ideal reader actually is — their interests, reading habits, and where they spend their time online — and build a marketing plan around reaching them directly. That can include social media campaigns, email marketing, advance reader copy distribution, book blogger and reviewer outreach, targeted advertising, and launch-day promotional pushes designed to boost your book's visibility and rankings during that critical first stretch. We also help you develop author branding that supports your marketing long after launch day — a consistent voice and presence that makes it easier for readers to find and follow your future work too. Throughout the process, we provide clear reporting so you can see what's actually working, and we adjust strategy based on real performance data rather than guesswork. Marketing a book is rarely a single campaign — it's an ongoing relationship with your audience, and we're here to help you build that relationship in a way that lasts well beyond your release date.",
    },
    {
        slug: "book-editing",
        number: "05",
        title: "Book Editing",
        tagline: "Editing That Respects Your Voice",
        intro:
            "Good editing doesn't rewrite your book — it sharpens what's already there. Our editing process focuses on strengthening structure, pacing, clarity, and consistency while keeping your voice, style, and creative intent completely intact. Whether your manuscript needs a close line edit or a broader developmental pass examining plot structure and character arcs, our editors work as collaborators, not gatekeepers, offering suggestions that serve your vision for the book rather than imposing one of their own.",
        ctaLabel: "Call Us Now",
        subheading: "From Structure to Sentence-Level Polish",
        body:
            "We offer multiple layers of editing depending on where your manuscript stands. Developmental editing addresses big-picture concerns — pacing that drags, plot holes, underdeveloped characters, or a structure that isn't serving the story you're trying to tell. Line editing works at the sentence level, refining word choice, rhythm, and flow so your prose reads smoothly without losing your distinct voice. Copyediting catches grammar, consistency, and technical issues that can distract readers from an otherwise strong manuscript. Many authors move through more than one of these stages, and our team can guide you toward the right combination based on where your manuscript currently stands and what it genuinely needs. Every editorial note comes with context — we explain our reasoning, not just our suggestions, so you can make informed decisions about your own work rather than accepting changes blindly. By the end of the process, your manuscript should feel unmistakably like your story, just told in its clearest, most compelling form.",
    },
    {
        slug: "children-s-book-editing",
        number: "06",
        title: "Children's Book Editing",
        tagline: "Editing for Young Readers and the Adults Who Read to Them",
        intro:
            "Children's books carry a unique set of demands that general editing doesn't always address — age-appropriate vocabulary, rhythm that works when read aloud, and pacing that holds a young reader's attention without losing the adult reading alongside them. Our children's book editors specialize specifically in this space, understanding the balance between simplicity and depth that makes a picture book or early reader genuinely engaging rather than flat or overly simplified.",
        ctaLabel: "Talk to the Expert",
        subheading: "Tone, Grammar, and Engagement, All in One Pass",
        body:
            "We review your manuscript for grammar and clarity just as we would any other book, but with particular attention to how the language will land with its intended age group — whether that's a board book for toddlers, a picture book for early elementary readers, or a chapter book for older kids just starting to read independently. We pay close attention to sentence rhythm and read-aloud flow, since so many children's books are experienced as much through listening as reading. We also help ensure your story's tone stays consistent and age-appropriate throughout, flagging language or themes that might not land the way you intend for your target reader. If your book includes illustrations, we consider how text and art work together, making sure word placement and pacing support the visual storytelling rather than competing with it. Our goal is a manuscript that reads beautifully aloud, holds a child's attention, and gives the story every chance to become the kind of book a family comes back to again and again.",
    },
    {
        slug: "ebook-creation",
        number: "07",
        title: "Ebook Creation",
        tagline: "Building a Digital Book That Performs",
        intro:
            "An ebook isn't just a PDF version of your manuscript — it's a distinct format with its own technical requirements, reader expectations, and platform rules. At Wordsworth Publishing, we build your ebook from the ground up with those specifics in mind, ensuring it displays properly, reads smoothly, and meets the formatting standards required by major digital retailers like Amazon Kindle, Apple Books, Kobo, and Barnes & Noble Press.",
        ctaLabel: "Let's Discuss",
        subheading: "From File to Fully Distributed Digital Book",
        body:
            "We start by converting and formatting your manuscript into the appropriate ebook file types, most commonly EPUB and MOBI, ensuring your text reflows correctly across different devices and screen sizes rather than displaying with broken spacing or misplaced page breaks. We handle interior design elements like chapter headers, table of contents navigation, embedded images, and any special formatting your book requires, testing across multiple devices and reading apps to confirm everything displays as intended. Beyond formatting, we assist with the distribution side too — setting up your book across relevant platforms, configuring metadata and categories so readers can actually discover your title, and advising on pricing strategy specific to the digital market. If you're releasing your ebook alongside a print edition, we make sure both versions stay consistent in content while respecting the different formatting needs of each medium. The result is a digital book that feels every bit as considered and professional as its print counterpart, ready to reach readers wherever they do their reading.",
    },
    {
        slug: "book-writing",
        number: "08",
        title: "Book Writing",
        tagline: "Turning Your Concept Into a Finished Manuscript",
        intro:
            "Not every great book starts with a finished draft; sometimes it starts with an idea, a story you've been carrying around for years, or a wealth of knowledge you want to share but haven't yet found the words for. Our book writing services are built for exactly that stage, working with you to shape a concept into a complete, structured manuscript ready for editing and publication.",
        ctaLabel: "Check Our Portfolio",
        subheading: "Genre Expertise, Built Around Your Vision",
        body:
            "Our writing team includes specialists across a wide range of genres and formats, so whichever direction your book takes, you're working with someone who understands the conventions and expectations of that space. We begin with in-depth conversations about your vision, your intended audience, and the tone you want your book to carry, building an outline together before any full writing begins so there are no surprises later in the process. From there, we draft your manuscript in stages, sharing progress regularly and incorporating your feedback throughout, rather than disappearing for months and returning with a finished draft you've had no input on. Whether you have a fully mapped-out plot or just a strong sense of the world and characters you want to explore, we adapt our process to meet you where you are. Your ideas, your story, and your voice remain at the center of the work throughout — we're here to help you get it onto the page in a form that's ready for readers.",
    },
    {
        slug: "mystery-writing",
        number: "09",
        title: "Mystery Writing",
        tagline: "Crafting Suspense That Keeps Readers Guessing",
        intro:
            "A great mystery lives and dies on its structure — the clues you plant, the red herrings you scatter, and the exact moment you choose to reveal each piece of the puzzle. Our mystery writers specialize in building that structure carefully, creating stories that keep readers actively guessing without ever feeling like the answer was withheld unfairly or arrived at through convenient coincidence.",
        ctaLabel: "Check Our Packages",
        subheading: "Building the Puzzle, Piece by Piece",
        body:
            "We work with you to map out your mystery's central question early in the process — the crime, the disappearance, the secret at the heart of the story — and build backward from there, planting clues and misdirection with intention rather than as an afterthought. Our writers pay close attention to pacing, ensuring tension builds steadily without long stretches where momentum stalls, while also making sure your detective or amateur sleuth feels like a fully realized character rather than a vehicle purely for solving the plot. We take care with the mechanics too — making sure every clue holds up under scrutiny, that the eventual reveal feels earned rather than arbitrary, and that side plots and secondary characters add genuine texture instead of clutter. Whether you're envisioning a classic whodunit, a slow-burn psychological thriller, or a cozy small-town mystery, we tailor tone and pacing to match the specific corner of the genre you're aiming for. The goal, always, is a story readers can't put down — and one that rewards them for paying close attention along the way.",
    },
    {
        slug: "historical-writing",
        number: "10",
        title: "Historical Writing",
        tagline: "Bringing the Past to Life, Accurately",
        intro:
            "Historical fiction asks a writer to do two things at once — tell a compelling, character-driven story, and stay faithful to the era, setting, and events surrounding it. Getting that balance wrong in either direction can undermine the whole project: too much dry historical detail can smother the story, while too little research can pull readers out of an otherwise immersive world. Our historical writers are experienced in threading that needle, grounding your story in real, well-researched detail without losing the human drama at its core.",
        ctaLabel: "Talk to the Expert",
        subheading: "Research-Driven Storytelling",
        body:
            "We begin with deep research into your chosen time period and setting, covering everything from daily life and social customs to major historical events and the political climate surrounding your story. That research informs everything from dialogue and clothing to the physical texture of your world, so period details feel woven naturally into the narrative rather than dropped in as exposition. We also pay close attention to historical accuracy regarding real events or figures your story may reference, ensuring creative license is applied thoughtfully and clearly where fiction departs from documented fact. Throughout the writing process, we prioritize character and story just as much as setting — because even the most meticulously researched historical backdrop only works if readers are invested in the people living through it. Whether your story is set in ancient civilizations, a specific decade of the twentieth century, or anywhere in between, our goal is a narrative that feels both authentic to its time and genuinely alive to read.",
    },
    {
        slug: "fantasy-writing",
        number: "11",
        title: "Fantasy Writing",
        tagline: "Building Worlds Readers Want to Get Lost In",
        intro:
            "Fantasy asks more of a writer than almost any other genre — an entire world needs to be built from scratch, with its own history, rules, cultures, and internal logic, all while still telling a story with real emotional stakes. Our fantasy writers specialize in that kind of world-building, creating settings that feel rich and lived-in without burying the story under excessive exposition.",
        ctaLabel: "Talk to the Expert",
        subheading: "From Magic Systems to Character Arcs",
        body:
            "We work with you to develop the foundational elements of your world early on — its geography, its magic or power systems, its politics and cultures — building a consistent internal logic that holds up across the full length of your story. From there, we focus on weaving that world into the narrative organically, introducing details through character experience and story events rather than long, standalone passages of world-building that slow the pace. Just as much attention goes into your characters themselves, their motivations, growth, and relationships — since even the most inventive fantasy setting needs grounded, believable people at its center to keep readers emotionally invested. We're equally comfortable with high fantasy epics spanning multiple kingdoms and battles, and smaller-scale, character-focused fantasy set in a single richly imagined town or region. Whatever scale your story takes, our goal is a world that feels genuinely real to step into, and a story that gives readers a reason to want to stay there.",
    },
    {
        slug: "sci-fi-writing",
        number: "12",
        title: "Sci-Fi Writing",
        tagline: "Exploring Tomorrow, Grounded in Story",
        intro:
            "Science fiction thrives on big ideas — new technology, alternate futures, first contact, and questions about what it means to be human in a changed world. But the strongest sci-fi never loses sight of story and character underneath the concept. Our sci-fi writers specialize in exploring ambitious, thought-provoking ideas while keeping your narrative firmly centered on people readers can actually connect with.",
        ctaLabel: "Our Packages",
        subheading: "Big Concepts, Told Through Human Stories",
        body:
            "We start by digging into the core idea driving your story — whether that's a specific technology, a societal shift, a future setting, or a scientific premise — and work through its implications carefully, so the world feels logically consistent even when it's entirely speculative. From there, we build your story and characters around that foundation, making sure the human stakes stay front and center rather than getting overshadowed by concept alone. Our writers are comfortable across the spectrum of the genre, from hard science fiction grounded closely in real scientific principles, to more speculative, imaginative futures where the rules are entirely your own. We also pay close attention to pacing and clarity, since science fiction can sometimes lean toward dense exposition — we work to make sure new concepts are introduced in ways that inform the story rather than interrupt it. Whether you're imagining a distant future, a near-future extrapolation of today's world, or something stranger altogether, our goal is a story that makes readers think, while never losing the emotional thread that keeps them turning pages.",
    },
    {
        slug: "non-fiction-writing",
        number: "13",
        title: "Non-Fiction Writing",
        tagline: "Sharing What You Know, Clearly and Compellingly",
        intro:
            "Non-fiction asks something different of a writer than storytelling alone — it requires accuracy, clarity, and a structure that makes complex information genuinely accessible to readers who may be encountering the subject for the first time. Our non-fiction writers specialize in translating deep knowledge and research into content that's both informative and genuinely engaging to read, whatever your subject matter.",
        ctaLabel: "Call Our Expert",
        subheading: "Research, Structure, and Voice",
        body:
            "We begin by understanding your subject deeply and identifying the core message or insight you want readers to walk away with, building a structure around that goal rather than simply compiling information without a clear throughline. Our writers conduct thorough research where needed, verifying facts and sourcing carefully so your book carries the credibility it needs, particularly for subjects where accuracy is essential to your reputation as an author or expert. Just as importantly, we focus on voice and readability, making sure your book doesn't read like a dry reference text, but like a knowledgeable, engaging guide walking readers through the material. Whether you're writing a business book, a how-to guide, a book on health or wellness, or any other subject where your expertise is the foundation, we adapt structure and tone to match both your subject and your intended audience. The goal is a book that establishes your authority on the topic while genuinely respecting your reader's time and attention along the way.",
    },
    {
        slug: "memoir-writing",
        number: "14",
        title: "Memoir Writing",
        tagline: "Turning Your Life Into a Story Worth Reading",
        intro:
            "A memoir asks a writer to do something deeply personal — take the real, lived complexity of a life and shape it into a narrative that resonates with readers who've never met you. That requires more than just recounting events in order; it requires finding the story within your story, the emotional thread that gives your experiences meaning beyond the facts alone. Our memoir writers work closely with you to find that thread and build a narrative around it.",
        ctaLabel: "Talk to the Expert",
        subheading: "Your Memories, Shaped Into a Narrative",
        body:
            "We begin with extended conversations about your life and the experiences you want your memoir to center on, listening carefully for the moments and themes that carry the most emotional weight. From there, we help identify a narrative structure that doesn't necessarily follow strict chronological order, but instead builds toward the meaning and reflection you're hoping to share with readers. Throughout the writing process, we prioritize your authentic voice above all else — a memoir only works if it sounds like you, telling your story in the way only you could tell it. We handle the technical craft of pacing, scene-building, and narrative structure, while making sure every major decision about what to include, what to leave out, and how to frame difficult or sensitive moments stays entirely in your hands. Writing a memoir can be an emotional process as much as a creative one, and we approach that process with the care and patience it deserves, at whatever pace feels right for you.",
    },
    {
        slug: "children-s-book-writing",
        number: "15",
        title: "Children's Book Writing",
        tagline: "Stories Young Readers Will Ask For Again and Again",
        intro:
            "Writing for children is a craft of its own — stories need to be simple enough to follow, engaging enough to hold a short attention span, and meaningful enough that adults don't mind reading them for the tenth time at bedtime. Our children's book writers specialize in striking that exact balance, crafting stories that entertain and, where appropriate, gently educate, without ever feeling like a lesson dressed up as a story.",
        ctaLabel: "Talk to the Expert",
        subheading: "Writing With Young Readers in Mind",
        body:
            "We work with you to shape your idea into a story built around a clear, simple emotional core — something a young reader can follow and connect with easily, whether that's a lesson about friendship, courage, sharing, or simply the joy of imagination. Our writers pay close attention to age-appropriate vocabulary and sentence rhythm, particularly for books meant to be read aloud, where the sound and flow of language matters just as much as the plot itself. If your book will be illustrated, we consider how text and art will work together from the earliest drafts, leaving room for illustrations to carry part of the storytelling rather than over-explaining everything in words. We're experienced across the range of children's formats, from board books for the youngest readers to early chapter books for kids just starting to read on their own. Whatever the age group, our goal is a story that holds a child's attention today, and becomes one of those books a family keeps coming back to.",
    },
    {
        slug: "seo-content-writing",
        number: "16",
        title: "SEO Content Writing",
        tagline: "Content That Reaches Readers Searching For You",
        intro:
            "Great writing only helps your platform if people can actually find it. Our SEO content writing service is built for authors, businesses, and platforms who need content that performs well in search results while still reading naturally and engagingly for the humans who land on it. We write content that respects both your readers and the algorithms helping those readers find you.",
        ctaLabel: "Launch your Book",
        subheading: "Strategy-Driven, Reader-Friendly Copy",
        body:
            "We start with keyword research specific to your niche, identifying the terms and phrases your ideal audience is actually searching for, then build content around those insights without ever sacrificing natural, engaging writing in the process. Our writers understand on-page SEO fundamentals — proper heading structure, keyword placement, meta descriptions, and internal linking — and apply them thoughtfully rather than stuffing content with awkward, repetitive phrasing that reads poorly and often performs worse anyway. Whether you need blog content to support an author platform, website copy for your publishing brand, or ongoing content to build long-term organic traffic, we tailor tone and structure to match your specific goals and audience. We also track what's working over time, refining our approach based on real performance rather than a one-size-fits-all template applied blindly across every project. The result is content that does double duty — genuinely useful and enjoyable for readers, while steadily building your visibility in search results over time.",
    },
    {
        slug: "script-writing",
        number: "17",
        title: "Script Writing",
        tagline: "From the Page to the Screen",
        intro:
            "Adapting a story for the screen, or writing an original script from scratch, requires a different set of storytelling tools than prose fiction — dialogue has to carry more of the narrative weight, pacing has to account for visual rhythm, and structure has to fit the specific conventions of the format, whether that's a feature film, a short, or a television pilot. Our scriptwriters specialize in that particular craft, helping bring your story to life in a format built for production.",
        ctaLabel: "Talk to the Expert",
        subheading: "Structure, Dialogue, and Format Done Right",
        body:
            "We work with you to develop your story's structure specifically for the screen, breaking it into acts and scenes that build tension and momentum visually rather than relying on internal narration or lengthy description. Our writers focus heavily on dialogue, crafting exchanges that feel natural while efficiently revealing character and advancing the plot, since screen dialogue has to do far more work per line than dialogue in prose. We also ensure your script follows proper industry-standard formatting, since improperly formatted scripts are often set aside before they're even read by industry professionals. Whether you're adapting an existing novel or memoir into a script, or building an original screenplay from an entirely new concept, we tailor our approach to the specific format and genre you're targeting. Our goal is a script that reads professionally, feels genuinely producible, and gives your story its best possible chance at making the leap from the page to the screen.",
    },
    {
        slug: "ghostwriting",
        number: "18",
        title: "Ghostwriting",
        tagline: "Your Ideas, Written in Your Voice",
        intro:
            "Ghostwriting is built around a simple promise — the finished book is entirely yours, in message, in perspective, and ideally in voice, even though someone else helped put the words on the page. Our ghostwriters take that responsibility seriously, working closely and discreetly with you to produce a manuscript that sounds like you, reflects your ideas accurately, and never reveals more about the process than you want it to.",
        ctaLabel: "See our Portfolio",
        subheading: "A Collaborative, Confidential Process",
        body:
            "We begin with in-depth conversations, interviews, or a review of any material you already have — notes, voice memos, outlines, even rough drafts — to understand not just what you want to say, but how you naturally say it. From there, we draft your manuscript in stages, sharing sections regularly for your feedback and adjusting tone, structure, and content based on your input throughout the process, rather than disappearing until a full draft is complete. Confidentiality is central to how we operate — every ghostwriting project is covered by clear agreements protecting your privacy and your authorship, and we never discuss or disclose our involvement without your explicit permission. We work across genres and formats, from memoirs and business books to novels and self-help guides, adapting our process to fit whatever kind of book you're envisioning. Whatever the subject, our goal is a finished manuscript you can put your name on with complete confidence, knowing it authentically reflects your voice and your message.",
    },
    {
        slug: "fiction-writing",
        number: "19",
        title: "Fiction Writing",
        tagline: "Stories Crafted Around Your Vision",
        intro:
            "Fiction writing covers an enormous amount of ground — literary fiction, romance, thrillers, contemporary drama, and everything in between — but every strong story shares the same foundation: characters readers care about, and a plot that gives those characters somewhere meaningful to go. Our fiction writers bring genre versatility and strong storytelling craft to whatever kind of book you're envisioning.",
        ctaLabel: "Call Us Now",
        subheading: "Genre-Aware Craft, Built Around Your Story",
        body:
            "We start with deep conversations about your concept, characters, and the tone you want your story to carry, building an outline collaboratively so your vision guides the process from the very beginning. Our writers adapt their approach based on genre conventions and reader expectations, understanding that a romance novel, a literary drama, and a domestic thriller each require different pacing, structure, and narrative techniques to land effectively. Throughout the drafting process, we share progress regularly and incorporate your feedback, keeping you closely involved in shaping the story rather than handing you a finished manuscript with no opportunity for input along the way. We pay particular attention to character development, dialogue, and pacing — the elements that most consistently separate a forgettable story from one readers genuinely connect with. Whatever genre or subgenre your book falls into, our goal is a finished manuscript that feels fully realized, distinctly yours, and ready for the next stage of the publishing process.",
    },
    {
        slug: "horror-writing",
        number: "20",
        title: "Horror Writing",
        tagline: "Delivering Genuine Dread, Not Just Shock",
        intro:
            "Great horror is built on more than jump scares and gore — it's built on dread, atmosphere, and the slow, deliberate erosion of a reader's sense of safety. Our horror writers understand that distinction, crafting stories that unsettle readers on a deeper level, whether your vision leans toward psychological horror, supernatural terror, or visceral, high-stakes fear.",
        ctaLabel: "Talk to the Expert",
        subheading: "Atmosphere, Pacing, and Genuine Fear",
        body:
            "We work with you to establish your story's core source of dread early on, then build pacing and atmosphere around it with real intention — knowing exactly when to escalate tension, and just as importantly, when to hold back and let unease simmer instead. Our writers pay close attention to sensory detail and setting, since much of what makes horror effective comes from how vividly a reader can picture the space their fear is unfolding in. We also focus heavily on your characters' psychology, since the most effective horror is often rooted in genuine, relatable vulnerability rather than characters who exist purely to be threatened. Whether you're envisioning a slow-burn haunted house story, a visceral survival horror narrative, or something that blurs the line between psychological unraveling and supernatural threat, we tailor tone and pacing to match your specific vision for the genre. The goal, always, is a story that stays with readers well after they've finished the final page.",
    },
    {
        slug: "book-cover-design",
        number: "21",
        title: "Book Cover Design",
        tagline: "The First Impression Your Book Makes",
        intro:
            "A reader typically decides whether to look closer at a book within seconds of seeing its cover — which makes cover design one of the highest-impact investments you can make in your book's success. Our design team builds covers that capture the tone, genre, and essence of your story at a glance, giving your book the professional visual identity it needs to compete on crowded shelves and even more crowded online storefronts.",
        ctaLabel: "Book an Appointment",
        subheading: "Design That Reflects Your Story",
        body:
            "We start by discussing your book's genre, tone, and target audience, since cover expectations vary significantly between genres — a thriller cover needs to signal tension and intrigue instantly, while a cozy romance cover needs an entirely different visual language to attract the right readers. From there, our designers develop concepts using typography, imagery, and color choices intentionally suited to your specific book and its comparable titles in the current market, so your cover feels at home in your genre while still standing out. We design for both formats — your book will need a striking front cover for digital thumbnails, and full wraparound cover art, including spine and back cover copy, for print editions. Throughout the process, you'll review concepts and provide feedback, and we'll refine the design until it feels like a genuinely accurate, compelling representation of your book. A great cover doesn't just look good in isolation — it tells a potential reader exactly what kind of story they're about to experience, before they've read a single page.",
    },
    {
        slug: "book-printing",
        number: "22",
        title: "Book Printing",
        tagline: "Quality Printing for Every Edition",
        intro:
            "However polished your manuscript and cover design might be, the physical printing itself is what a reader actually holds in their hands, and print quality has a real, tangible effect on how professional your book feels. Our printing services are built to deliver high-quality physical copies of your book, whether you need a small batch for a launch event or a full print run ready for wide retail distribution.",
        ctaLabel: "Talk to our Expert",
        subheading: "Print Options Built Around Your Needs",
        body:
            "We work with you to determine the right printing approach for your specific goals, whether that's traditional offset printing for larger runs, print-on-demand for flexibility and lower upfront costs, or a hybrid approach depending on your distribution plans. We handle trim size selection, paper stock, cover finish options like matte or glossy, and binding style, helping you choose combinations that suit your book's genre and intended audience, since a children's picture book and a literary novel call for very different physical presentations. Our team manages quality control throughout the printing process, checking proofs carefully before full runs are approved, so you're never surprised by color shifts, misaligned text, or binding issues once copies arrive. We also help coordinate shipping and fulfillment logistics, particularly for authors planning launch events, bulk orders, or ongoing retail restocking. The goal is a finished, physical book that matches the quality and professionalism of your manuscript and cover design in every way, from the first page to the last.",
    },
    {
        slug: "author-website-design",
        number: "23",
        title: "Author Website Design",
        tagline: "A Professional Home for Your Work",
        intro:
            "In an increasingly online publishing landscape, an author website is often the first place readers, reviewers, and industry contacts go to learn more about you and your books. Our web design team builds custom author websites designed specifically to showcase your work, establish your credibility, and give readers a clear, easy way to learn more, connect with you, and purchase your books.",
        ctaLabel: "Talk to the Expert",
        subheading: "Built Around You and Your Books",
        body:
            "We start by understanding your author brand, your genre, and how you want to present yourself to readers, building a design that reflects that identity rather than relying on a generic, one-size-fits-all template. Your website typically includes a home page introducing you and your work, a dedicated page for each book with cover images, descriptions, and purchase links, an author bio section, and a way for readers to sign up for updates or connect through social media and contact forms. We also build in blog or news functionality if you want an ongoing space to share updates, event announcements, or content related to your books. Throughout the design process, we prioritize clean, professional visuals and easy navigation, since a cluttered or confusing website can undercut even the strongest author brand. Once your site is live, we can also assist with search engine optimization and ongoing updates, helping ensure your website continues working for you well beyond the initial launch, supporting every future book you publish.",
    },
    {
        slug: "audiobook-narration",
        number: "24",
        title: "Audiobook Narration",
        tagline: "Bringing Your Book to Life in Sound",
        intro:
            "Audiobooks have become one of the fastest-growing ways readers experience books, and a well-narrated audiobook can introduce your work to an entirely new audience who may never have picked up a print or digital copy. Our narration services are built to bring your book to life through professional, engaging audio production, matched carefully to your book's genre, tone, and characters.",
        ctaLabel: "Check Our Packages",
        subheading: "Professional Narration, Matched to Your Story",
        body:
            "We help you select the right narrator for your specific book, considering factors like genre, character voices, and overall tone. A thriller might call for a narrator skilled at building tension through pacing and delivery, while a memoir might benefit from a warmer, more conversational narration style. Once a narrator is selected, we manage the full recording and production process, including sound editing, pacing adjustments, and quality control, ensuring the final audio file meets professional industry standards for clarity and consistency throughout. For books with multiple characters or a large cast, we help coordinate voice differentiation so listeners can easily follow dialogue between characters without confusion. Once your audiobook is fully produced, we assist with distribution across major audiobook platforms, ensuring your file formats and metadata meet each platform's specific requirements. The result is a professionally produced audiobook that gives your story a genuine second life in audio form, reaching listeners wherever and however they prefer to experience books.",
    },
];

export function getInnerServiceBySlug(slug: string): InnerService | undefined {
    return innerServices.find((s) => s.slug === slug);
}