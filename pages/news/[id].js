import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function News({news}) {
    const router = useRouter();

    let id = router.query.id;
    console.log(id);
    // if (title === 'Microstrategy Buys More Bitcoin Company Crypto Holdings Grow to 132500 BTC') img = '3.jpg'
    return (
        <div className='flex flex-col text-center min-h-screen'>
            <Header />
            <div>
                <div className='py-3 text-2xl bg-black text-white'>
                    <span className="font-bold">
                        {news[id - 1].title}
                    </span>
                </div>
                <div>
                    <div className='relative h-64 w-full'>
                        <Image
                            src={`${news[id - 1].img}`}
                            objectFit='cover'
                            fill
                            alt='news image'
                        />
                    </div>
                </div>

            </div>
            <div className='py-10 text-gray-500 bg-white px-2 md:px-5'>
                <p>
                    {news[id - 1].body}
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default News;
export async function getServerSideProps(context) {
    const news = [
        {
            title: "PayPal enables transfer of digital currencies to external wallets",
            body: "The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin BTC $16, 704, Ether  ETH $1, 217, Bitcoin Cash BCH $100, and Litecoin LTC $74.58. In addition, customers who transfer their crypto onto PayPal can spend it via Checkout at millions of merchant terminals.The company has been granted a full Bitlicense by the New York Department of Financial Services for the conduct.Users would simply need to log in to their accounts and enter the crypto section of the application to start transferring coins.Users are generally required to complete a one- time ID verification before the procedure. Crypto transfers to recipients outside of PayPal would incur a network fee based on their respective blockchains, but transfers between PayPal users will not incur such fees.To protect users privacy, the firm generates a new recipient address for each transaction into ones PayPal account.PayPal will also not charge fees for incoming transfers, The company is also working to integrate other forms of cryptocurrency services, such as central bank digital currencies, to boost its digital footprint.It is also exploring the possibility of launching its own stablecoin, dubbed PayPal Coin. The discovery came after a developer found evidence of such a stablecoin within the source code of the company's iPhone app. ",
            img: '/1.jpg'
        },
        {
            title: 'Italian Parliament Approves 26 percent Crypto-Gains Tax in 2023 Budget',
            body: "Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes.Crypto traders in Italy will be subject to a 26percent capital-gains tax starting in 2023, according to a new budget that won parliamentary approval on Thursday. Italian Prime Minister Giorgia Meloni's 2023 expansionary budget  which was completed in a rush before the end of the year  features 21 billion euros ($22.3 billion) in tax breaks to assist businesses and households facing the energy crisis, Reuters reported. In Italy, where crypto remains largely unregulated, the 387-page budget legitimizes crypto assets by defining them as 'a digital representation of value or rights, which can be transferred and stored electronically, using the technology of distributed ledger or similar technology. Italy's (and most recently Portugal's) move to introduce a capital- gains tax on crypto comes ahead of the implementation of the European Union's Markets in Crypto Assets (MiCA) regulation that promises a licensing frameworks and stringent operating requirements for crypto-service providers in the 27-member bloc. The 26 percent rate applies to gains from crypto trading if they exceed 2, 000 euros per tax period.As an incentive for declaring crypto profits, the new bill also sets a 'substitute income tax' for investors at 14 percent of the value ofassets held as of Jan. 1, 2023, instead of the cost at the time of purchase. According to the new rules, losses from crypto investments can be deducted from profits and be carried forward.  Investors, however, may require some additional guidance on what qualifies as a taxable event as the document also says, 'the exchange between crypto assets having same characteristics and functions,' doesn't constitute a 'fiscal case'.",
            img: '/2.jpg'
        },
        {
            title: `Microstrategy Buys More Bitcoin Company Crypto Holdings Grow to 132500 BTC`,
            body: `Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as “the institutional-grade digital asset,” said Microstrategy founder Michael Saylor Microstrategy Acquires More Bitcoin
          Nasdaq-listed Microstrategy Inc. announced Wednesday that it has purchased more bitcoin for its corporate treasury. Michael Saylor, the company’s founder and executive chairman, tweeted Wednesday:Microstrategy has increased its bitcoin holdings by ~2,500 BTC. As of 12/27/22 Microstrategy holds ~132,500 bitcoin acquired for ~$4.03 billion at an average price of ~$30,397 per bitcoin. In its filing with the U.S. Securities and Exchange Commission (SEC), Microstrategy clarified that the 2,500 coins were acquired between Nov. 1 and Dec. 24 by its wholly owned subsidiary Macrostrategy.
          The subsidiary bought approximately 2,395 BTC at an average price of $17,871 per coin between Nov. 1 and Dec. 21. It then sold about 704 BTC at $16,776 per coin on Dec. 22. Macrostrategy then bought about 810 more BTC at $16,845 per coin on Dec. 24. At the time of writing, bitcoin is trading at $16,656.80.The executive noted that both the chairman of the SEC and the chair of the Commodity Futures Trading Commission (CFTC) have confirmed that bitcoin is a commodity.Saylor previously explained that Microstrategy is investing in BTC “for the long term.” He added: “Our strategy is to buy bitcoin and hold the bitcoin, so there’s no price target … I expect bitcoin is going to go into the millions. So, we’re very patient. We think it’s the future of money.”`,
            img: '/3.jpg'
        },
        {
            title: `Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022`,
            body: `2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners.
          Miners were dealing with a variety of issues, including defaulted loans, quarterly losses, and soaring bitcoin hashrates that reached all-time highs. All these factors were affecting the profitability of the miners and were causing sell pressure.
          The situation was aggravated when cryptocurrency prices, including Bitcoin’s, plummeted. Bitcoin, which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022.
          Bitcoin miners’ revenue dropped in 2022
          Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies. The falling cryptocurrency prices had a major effect on the income and profits of miners. Even though the $9.55 billion in revenue in 2022 seems like a large number, it is comparatively lower than that of 2021.
           
          Over the course of 2021, bitcoin miners made more than $15 billion in revenue, according to the data from the block. This was actually considered to be a 206 percent year-over-year increase.
                      `,
            img: '/4.jpg'
        },
        {
            title: `Mango Markets Exploiter Eisenberg Arrested in Puerto Rico`,
            body: `The investor drained $110 million in cryptocurrencies from the platform. Avraham Eisenberg, the crypto investor whose “highly profitable trading strategy” drained DeFi trading platform Mango Markets of crypto worth $110 million, was           arrested Monday in Puerto Rico, court documents said.
          The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform.
          Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time.
          A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg “willfully and knowingly” manipulated the sale of a commodity – namely futures contracts on Mango Markets.
          “Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.”
          `,
            img: '/5.jpg'
        },
    ]
    return {
        props:{news}
    }
}