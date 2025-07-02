import React from 'react';

const WhyCoffee = () => {
    const benefits = [
        "IMPROVE PROFIT MARGINS",
        "IMPROVE EMPLOYEE PRODUCTIVITY",
        "IMPROVE CUSTOMER EXPERIENCE"
    ];

    const testimonials = [
        {
            title: "GOOD PROFIT MARGINS",
            quote:
                "I’d recommend Coffee for Life to anyone. The drinks themselves are as good as the big brand names, if not better, and there is good profit margin to be made selling coffee from these machines.",
            author: "Cailein Gillespie",
        },
        {
            title: "PAYS FOR ITSELF",
            quote:
                "We charge our staff 50p a coffee to cover the cost of the machine so we’re able to impress clients and reap the benefits of improved staff productivity free of charge.",
            author: "Soapbox Digital",
        },
        {
            title: "CUSTOMERS LOVE OUR COFFEE",
            quote:
                "Our customers love our coffee! Since swapping our old machine for one from Coffee for Life we've really noticed an increase in the number of compliments we get",
            author: "Danny Welsh",
        },
    ];

    const stats = [
        {
            heading: "82% OF EMPLOYEES...",
            detail:
                "82% of employees say coffee puts them in a better mood and able to perform their roles more efficiently.",
        },
        {
            heading: "50% OF WORKERS",
            detail:
                "50% of workers leave the office for 20 minutes a day to purchase coffee and other hot drinks.",
        },
        {
            heading: "COFFEE EASES THE PAIN...",
            detail:
                "Coffee eases the pain of working at a desk. Consuming caffeine has been found to ease pain in the neck, shoulders, forearms and wrists.",
        },
        {
            heading: "46% OF EMPLOYEES...",
            detail:
                "46% of employees claim to be less productive without coffee whilst 20% claim it allows them to better interact with co-workers and clients.",
        },
    ];

    const pitches = [
        {
            heading: "BOOST YOUR SALES...",
            detail:
                "Boost your sales using the power of coffee. Coffee makes clients happy, relaxed and more likely to respond positively to your sales pitch.",
        },
        {
            heading: "GROW YOUR BUSINESS...",
            detail:
                "Grow your business through word of mouth referrals. Impress a customer and they’re far more likely to recommend you to a friend.",
        },
        {
            heading: "MAKE YOURSELF ATTRACTIVE...",
            detail:
                "Make yourself attractive. People drink coffee regardless. If visiting your premises combines great coffee and getting work done then your company is more attractive than competitors to a busy professional.",
        },
    ];

    return (
        <div className="bg-[#f4f4f4] border-t-[15px] border-[#4674B8] text-black px-4 md:px-16 py-16 font-sans leading-relaxed">
            <h1 className="text-center text-xl md:text-2xl font-semibold tracking-widest leading-tight uppercase mb-16">
                WHY CHOOSE A <br /> COMMERCIAL COFFEE MACHINE
            </h1>
            <div className="hidden md:flex justify-between text-center mb-16">
                {benefits.map((benefit, i) => (
                    <h2 key={i} className="text-md font-bold uppercase w-1/3">
                        {benefit}
                    </h2>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                <div className="space-y-10">
                    {testimonials.map((item, i) => (
                        <div key={i}>
                            <h3 className="text-md font-bold uppercase mb-2">{item.title}</h3>
                            <p className="text-gray-800 italic mb-2">“{item.quote}”</p>
                            <p className="font-semibold text-sm text-gray-700">{item.author}</p>
                        </div>
                    ))}
                </div>
                <div className="space-y-10">
                    {stats.map((fact, i) => (
                        <div key={i}>
                            <h4 className="font-bold uppercase mb-1 text-[15px]">{fact.heading}</h4>
                            <p className="text-gray-800">{fact.detail}</p>
                        </div>
                    ))}
                </div>
                <div className="space-y-10">
                    {pitches.map((fact, i) => (
                        <div key={i}>
                            <h4 className="font-bold uppercase mb-1 text-[15px]">{fact.heading}</h4>
                            <p className="text-gray-800">{fact.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyCoffee;
