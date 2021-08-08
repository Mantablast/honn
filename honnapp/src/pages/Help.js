import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Help() {
    return (
        <div className="help-box">
            <img className="small-logo" src={'https://user-images.githubusercontent.com/71906988/128268672-70f08c65-5060-4e80-bd67-b59c7589e6a9.png'} />
            <div>
                <h2>Helping Individual Families - Please read</h2>
                <p>
                    Potential recipient families posting their needs below will not be seen.  If you need help please fill in an application or contact an Admin.  Similarly if you wish to help a family or become a sponsor please contact Jennifer Gwilliam rather than posting below.  Thank you. </p>
                Welcome to the programs which help individual families.  We are so happy that you are considering partnering with a family who is struggling to provide for their family while having to contend with the outrageously high prices found in northern Canada.
                <p>1. Please consider your choice to help an individual family very carefully before making a commitment.  Do your research to see the costs of shipping or postage, the cost of goods and anything else that concerns you.  Ask questions about anything and everything before requesting a match and carefully consider the amount of money you wish to put toward this project and choose the size of family you feel able to help accordingly. Once you are presented with a potential match and you agree to accept it, please consider it a serious responsibility.  The recipient family will have been notified that they have been matched and will be excited and waiting to hear from you.  If for any reason you change your mind about helping, or decide that you cannot follow through please notify us immediately so that we can re-match the family without delay.  Otherwise it may be a couple of months before it is discovered that nothing is going to arrive, and we can put the family back on the list to await another match and then wait again for a box to arrive.  This is not fair to them.  We understand that things can sometimes get in the way of you following through on your commitment but please just let us know right away that you cannot help at this time so the family doesn’t have to suffer the consequences. </p>
                <p>2. Once you accept a match the first step should be to contact the family or their liaison so you can check that the information you have is correct and up to date.  Occasionally a family forgets to inform us when they move and you don’t want to have to pay for a returned package which arrived in a prior community of residence.  If you are not Facebook friends the first communication can be challenging so if you don’t receive a prompt response from your recipient family please let one of the Admins know so they may assist you to get in contact.  In the first letter it is a good idea to introduce yourself and your family and to tell them you were matched through our group, and give them a little information about your lives and where you live.  Please be sensitive and don’t stress items which may magnify the chasm between those who are struggling to get the basics and those who may lead a more affluent lifestyle.  You also have the opportunity here to ask if there are items they particularly enjoy or that they need or would like to have.</p>
                <p>3. Our focus is on helping through the sharing of food and other basics of life.  How much you would like to help beyond that is up to you.  Some families like to send clothing, books, DVDs, school supplies, toys, gifts for the children and so on.  This is entirely up to the sending family.  Please do not feel obligated to send any of these things if you are not financially able to do so.  We do have a clothing group where people may post requesting items they need, or items they have to give away.  If your recipient family needs clothing and it is not something you wish to provide you can direct them to this site.   If you intend to provide a box of birthday decorations, goodies and gifts etc. please let your recipient family know so they do not also apply to the birthday box group which always has more children seeking help than people who are able to send boxes.</p>
                <p>4. If you agree to a match then please shop and send the box out, or place an order with the coop within a week or so.  That way we can ensure that people are receiving the necessary help in a timely manner.  If you are not able to do this then let us know so we can discuss an alternative.  Often families being matched are in great need at the time of matching and we don’t want them to have to wait any longer than is necessary.</p>
                <p>5. We use the term “box” to refer to a single shipment.  It does not mean a single cardboard carton.  Some people may elect to send six boxes each time they help their family.  Someone else may deposit money on the coop account for the family.  One person may choose to send one large Rubbermaid tote, and another might send two moderate boxes.  The amount sent depends on the resources of the sending individual or group and the size and the needs of the recipient family.</p>
                <p>6.  We use the term “recipient family” to pertain to a northern family who has requested help.  We use the term “helper” for a family in the south who is sending a single shipment to a family. We use the term “sponsor” to refer to a southern family who is helping the same recipient family on an ongoing basis.</p>
                <p>7. Some families have provided us with a list of items they frequently use and would like to receive.  Others say they would be grateful for anything.  If you need any ideas about what to send you will find a document under the files tab which gives a list of some of the most requested items.</p>
                <p>8. Before requesting a match, please look into the different ways there are to help as each has it’s own costs and pros and cons.
                    <ul>
                        <li>a.  Some people like to place money on account for their recipient family at the coop.  This way the family can select their own groceries.  The money cannot be withdrawn for cash or spent on things such as cigarettes or alcohol it can only be used to purchase food or essentials.</li>
                        <li>b.  Some people like to prepare their own shopping lists and place an order for their family at the coop.</li>
                        <li>c.  Some people like to tell the coop Manager how much they would like to spend and ask them to suggest an order for the family based on their size and makeup.</li>
                        <li>d.  Some people like to order one of the “We Care” pre-set coop packages.  The available packages and the coops where they are offered are listed in a document under the files tab.  The coops only accept payment by credit card.  If you choose any of the coop options the process is much the same.  You e-mail or phone the coop Manager, telling them how much you would like to deposit and the name of the family you are helping, giving them your shopping list, or the amount you would like to spend on a hamper, or letting them know the package you would like to order.  If your choice requires it the Manager will provide you with a quote for the selected items.  Once you are satisfied with the arrangements you pay for your order and the coop provides you with a receipt.  They also normally notify you once the order has been delivered but that doesn’t always happen during a very busy time.  The coops only accept payment by credit card.  They do not accept EMTs eg. electronic money transfers., Paypal or other forms of payment.  If you live outside Canada or if you do not have a credit card but would like to help in one of these ways please let us know and we can give you an alternative.  Other ways to help the family includes </li>
                        <li>e.  Shopping online at londondrugs.ca, well.ca, Walmart.ca, amazon.ca or any other vender who ships to remote areas.  You need to be very careful to read all the small print though as quoted shipping fees and discounts do not always include remote areas and the selection of items to these areas may be limited and shipping costs may be extremely high. </li>
                        <li>f.  You can send goods from home in boxes or in Rubbermaid totes through Canada Post.  Couriers do not deliver to most of the areas in which we work.  Postal costs are high!  You can apply online for a small business card  which then gives you a 5% discount on packages, plus insurance and occasionally offer perks such as in October 2016 and 2017 each holder of a card was able to send a 5kg box on each Tuesday free of charge.  You can apply for a card, check the cost of a package and find out a lot more at canadapost.ca. They also have a medium size flat rate box which you can purchase for REMOTE AREAS which sells for $34.99 and can fill with 5kg of goods.  At the moment they are only available at selected outlets but should be available everywhere shortly.  If you would like to help a family but do not have time to make all the arrangements you can make a donation to Helping Our Northern Neighbours and letting us know that this is how you would like the money spent and we will take care of it for you.</li>
                    </ul>
                </p>
                <p>9. We strongly discourage the sending of money to any recipient family or to their bank account, via a money order, cheque, Western Union, EMT (Electronic Money Transfer), Paypal or through any other avenues or at least not doing so until you have known them well for a long time and can be sure where their priorities lie.  Once they receive the money they are free to do what they want with it, and that may not be purchasing groceries.  It may be used to play Bingo, purchase items online, buy drugs or alcohol or heaven knows what.  It the past we had someone send a family $200 only to find them bidding $200 in an online auction for a case of pop and then contacting the sending family and the program the same day saying they had no formula or diapers for the baby and asking if we could order some from the coop.  We had another sending family give money to their recipient family so they could purchase Christmas dinner and food for over the holidays only to discover that the entire amount had been wasted when a sister asked for a hamper to be sent to the family as they had nothing for a Christmas dinner and telling the sender that their cupboards were almost empty.  Of course all families are not like that but until you know the people well you do not know into which category they will fall.  If you would like to help with money then please consider putting it on account at the coop or another store where it cannot be withdrawn for cash and can only be used for food and essentials.  Also if you are putting money on account please send only the amount of money you would like them to have for a one time purchase.  If you are sponsoring for instance and you have decided to deposit $800 over the year at the coop it would be much wiser to send $200 each quarter rather than $800 all at once and hope they will use it wisely so it lasts the year.  Many families are headed by someone young and suddenly having money can be very tempting.</p>
                <p>10. If you do not want a long term commitment, have limited finances, plan to collect items to send or fundraise to get the money together to help or you just want to test the waters we have a NEXT UP or one-time program.  All the recipient families who do not have a sponsor are on a rotating list to receive boxes.  You can send them as often as you would like but would be helping a different family each time.  When you would like to send a NEXT UP box you contact us and let us know the size of family you are able to help.  For these boxes you do not get a choice beyond family size as we try to help people in order in as much as it is possible to do so.  We give you the information about the family and information about any food allergies or medical conditions they may have and any requests they have listed and then you help the family by which ever method you have chosen.  Once you have shipped the box or boxes to the family your obligation is complete and you have no further requirement to do anything.  Some people enjoy this option as they like the idea of spreading the love around and giving more families the opportunity to get help.</p>
                <p>11. If you would like the opportunity to get to know another family and to learn about where they live and their culture and traditions as you develop a friendship then perhaps SPONSORING is the program for you.  This is an ongoing commitment to the same family for as long as they need help or until you notify us that you have decided to stop.  With this program you can select the size of family you would like to help and you are also able to make requests such as that you would like a Elder or a single parent, or a family with young children, and we try to find someone who meets your requests as closely as possible.  With the SPONSORSHIP program we request that at a minimum you help the family four times per year, and we ask that you help once each quarter rather than sending four boxes all in one go and then saying you are done for the year.  It is much better to help them once and then let them know the approximate time when the next shipment will arrive.  Our focus is on food and that is all you are obligating yourself to provide but you are welcome to send other items such as clothes, books, DVDs, toys, school and craft supplies and so on if you wish, and you may send things as often as you wish.  Some sponsors help monthly perhaps alternating money at the coop one month and then sending boxes from home the next.  Other sponsors send every other month, and others stick to the four times per year.  Do not allow yourself to become overwhelmed.  Only you know what your finances will allow you to do.  Don’t feel that you need to do more because someone else does.  We have some people who are sponsoring on a small pension while others have virtually unlimited financial resources.  If you find the family needs more help than you are able to give, consider posting a note on the group page and asking someone to join you as a co-sponsor.  You don’t need to live near each other and can decide between yourselves how you would like to handle things - if you would like to alternate shipments or if you would like to take care of different things or whatever works best for both of you.  You can also get a group of friends or family members together to help you and do this as a family project, or you may wish to join a Chapter and sponsor one of our large families.</p>
                <p>12. There is no set length of time for a sponsorship.  Once you accept a match you are agreeing to continue to sponsor the family until they or we notify you that they can now manage on their own or until you notify us of your intention to stop helping.  Please let us know and don’t just stop sending things so that we may reassess the family’s circumstances and re-match them if necessary.</p>
                <p>13. If the family lets you know of any change within their household, or their contact information or anything else has changed please let us know so we can update their profile and keep it as current as possible.</p>
                <p>14. The numbers we use are just internal and help us to find a family quickly and allow us to post about the family on the group page without identifying them.  The coops know nothing about the numbers so you will need the family name before contacting the coop to place any sort of order.</p>
                <p>15. All information about the recipient families is considered to be highly confidential.  Please do not ever post their name or any identifying information on the group or any other page.  If you are having difficulty reaching your family please don’t post a public message to them, contact an Admin and they will help you.  If you are working with a group you can of course share the information with other members of the group and their address with people who need it for the purpose of mailing, but please do not pass it on to other groups or to individuals outside your group, for any reason. If the recipient family sends you any pictures in a private message please to not share them with anyone or publicly post them without first getting permission from the family to do so.  This also applies to using the images on promotional materials for your Chapter or group or on fundraising materials.  It is very difficult for some people to ask for help and they feel very embarrassed to have anyone in their community know what they are doing.  The same thing applies to photos the recipient family posts on the group page.  If they show family members you need to ask permission from the family before using the images anywhere else.</p>
                <p>16. The most difficult families for us to match are the large ones (7+ members).  Please consider getting a co-sponsor or two and accept them for your sponsorship or even for a Next Up box.  Many of the large families have been waiting for help for such a long time and are often feeling discouraged.</p>
                <p>17. If you wish to send clothing it is always welcome.  Underwear and socks must always be new.  For other clothing items, “as new” is certainly acceptable.  The rule of thumb is that if you would wear it yourself or put it on your own family it is fine to send.  It should be laundered and free of tears, stains, broken zippers etc.  Because of the extreme temperatures wool is preferable over acrylic.  Consider sending the makings for things like parkas as likely for the same price (or less) as a ready-made garment  you can purchase the materials and the family can then craft their own traditional clothing which is likely better made and more durable than it’s commercially made counterpart.</p>
                <p>18. You may find families requesting formula for children beyond the age when children in the south would still be drinking it.  Because of the different caloric requirements for people living with extreme cold some northern families supplement the diet of their young children by using formula.</p>
                <p>19. When you contact us to become either a sponsor or a helper please give us your name, address and e-mail address so we know how to reach you.  This information will be used only by us and given to no one else without your permission.  </p>
                <p>20. Please be sensitive to cultural differences.  If you have a question about things to send, or things in general that you don’t understand, please ask us and we will do our best to help.  </p>
                <p>21. Please do not send your recipient family religious or other promotional materials.  This program is strictly for sharing food with our neighbours.  We do not promote any other agenda.  It is also not our place to educate others or to tell them how they should lead their lives.  If you are not comfortable with this then perhaps you might consider an alternate avenue to helping individual families as your way to help.</p>
                <p>22. The boxes and other things sent through the Helping Our Northern Neighbours programs are boxes of love and friendship, freely given.  The cost of purchasing the goods and/or shipping is the responsibility of the sending family.  At no time should a receiving family be asked to pay anything in order to receive the boxes.  If necessary, sending families can fundraise to acquire the necessary funds or the membership can be asked to contribute to the cost.</p>
                <p>23. After a northern family fills in an application to receive help we do our best to check them out through references from official members in their community and via all the means available to us.  Please understand though that we are not on the ground and do not have the ability to personally visit each family in order to assess their level of need and verify the information given to us.  Every so often unscrupulous people manage to get in with multiple applications or false information.  As soon as information is given to us about these things or we suspect them we immediately try to get on top of things and check them out more intensely and then act appropriately.  If you suspect things are not as we have indicated to you please let us know so that we can look into things through a wider variety of avenues.  If you see your family selling goods you have sent to them please take a screenshot of their post and let us know right away as this is strictly against our policies and what they have agreed to.</p>
                <p>24. If you have any problems with your recipient family because of rudeness, unreasonable demands, lack of communication or even if things just don’t feel quite right to you, please let us know right away.  Don’t feel uncomfortable and unhappy and just keep it to yourself.  Together we can come up with a plan and perhaps speak to the receiving family to sort things out or maybe you would like to switch to another family or help the people in the north in another way.  Chances are that if it is not working for you it is not working for them either.  Sometimes the fit is just not right and with different matches you may both be happier.  It is not a failure if it doesn’t work.  The next match may work perfectly for both of you.</p>
                <p>25. While it is not up to us to tell others how they should eat or to educate them on nutrition, please concentrate on sending healthy food rather than items which are full of empty calories or are high in sugar and salt.  They may taste good and are fine as treats but are not going to provide nutrition to people who are going hungry.  Before sending unusual items such as couscous, kashi, tofu or other things which may be unfamiliar please ask the family if they would try these things if you included a recipe.  There is no point in sending things that are going to go to waste.</p>
                <p>26. All items sent should be in sealed commercial packaging.  Before sending bulk foods please ask your recipient family if they would be comfortable using these things.  Remember when you are matched you are strangers and they may feel uneasy receiving unsealed items from people they don’t know.  Down the road when you know each other they may be fine with it.  Soup kitchens generally welcome bulk food for their soups, and some families have no problem with it either.</p>
                <p>27. When you receive messages please remember that English may not be the person’s first language so that what you perceive as them being rude may simply be a misunderstanding.  Before jumping on them please bring it to us so we can offer a different perspective and if necessary talk to them.</p>
                <p>28. It is a good idea to keep a notebook with a list of what you send, the size of box, the cost of postage, tracking numbers, the details about a coop order, when things arrived (if you know), items that were very popular with the family and any other such info.  It can be a great reference down the road.</p>
                <p>29. We do not allow any self-matching in our group.  The only way to be fair to everyone is to maintain a list and to help people in the order in which they applied and according to the helpers requests and the urgency of the need.  We take this very seriously and people who self-match after being asked to stop will be removed from the program permanently.  </p>
                <p>30. Mailed items may be delayed due to weather and may experience temperature changes several times including freezing.  Please keep this in mind as you consider what to send or the time of the year.  Perishable items cannot be sent.  They need to be purchased from a local store.</p>
                <p>31. You may wish to consider shipping scented products such as soap in separate packages or with products such as tins where the scent will not be absorbed by food items.  Soap scented oatmeal may not be very palatable.</p>
                <p>32. When sending liquids such as shampoo it is a good idea to tape around the lid and to put these items in a sealed Ziplock bag, so that if they should break or burst if they freeze the fluid will be contained in the bag and will not negatively affect everything in the box.</p>
                <p>33. If helping an individual family is not the right avenue for you to help, don’t worry.  There are plenty of other options – smaller projects( at the moment we are doing Backpacks/school supplies and Hygiene packages), clothing, shoe drives, school feeding programs, Sunday School classes, churches, soup kitchens, community feasts, food banks, domestic abuse and homeless shelters, homes for Elders and on and on.</p>
                <p>34.  If you would like to make a financial donation to our Emergency Fund which we have on hand to respond to urgent situations as they appear, or toward a specific project, you can send a Paypal transaction or an EMT (Electronic Money Transfer) to honnfinancial@gmail.com  It will appear with the name of our Treasurer, Mathew Ponting.  Once you have sent the money please send an e-mail to the same address containing the information needed to collect the money, and any instructions if you wish the money to go toward a particular project.  Any money that comes in without specific instructions will automatically go into the Emergency Fund.</p>
            </div>
        </div>
    )
}

export default Help;