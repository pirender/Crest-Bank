'use client'
import React, { useEffect, useState } from 'react'

const FaqOne = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [started, setStarted] = useState(false);
    const [how, setHow] = useState(false);
    const [services, setServices] = useState(false);
    const [loans, setLoans] = useState(false);
    const [update, setUpdate] = useState(false);
    const [security, setSecurity] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 330) {
                console.log('window:' + window.scrollY)
                // Change 100 to the scroll position you want
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='py-8'>
            <div className="mycontainer">
                <div className="px-4">
                    <div className='flex flex-col gap-8 lg:flex-row'>
                        {/* side bar */}
                        <div className={`lg:flex-[1] lg:sticky lg:top-24 lg:h-screen `}>
                            <div className='bg-primary py-10 px-4 rounded-[10px]'>
                                <div className='flex flex-col gap-2'>
                                    <a href="#started" className='hover:bg-[#00b3b336] py-2 rounded-[10px] px-2 text-white font-semibold' onClick={() => setStarted(!started)}>Getting started</a>
                                    <a href="#how" className='hover:bg-[#00b3b336] py-2 rounded-[10px] px-2 text-white font-semibold'>How Crest Bank works</a>
                                    <a href="#services" className='hover:bg-[#00b3b336] py-2 rounded-[10px] px-2 text-white font-semibold'>Services</a>
                                    <a href="#loans" className='hover:bg-[#00b3b336] py-2 rounded-[10px] px-2 text-white font-semibold'>Loans</a>
                                    <a href="#update" className='hover:bg-[#00b3b336] py-2 rounded-[10px] px-2 text-white font-semibold'>Updating Account</a>
                                    <a href="#security" className='hover:bg-[#00b3b336] py-2 rounded-[10px] px-2 text-white font-semibold'>Security</a>
                                </div>
                            </div>
                        </div>
                        {/* sidebar */}

                        <div className='lg:flex-[2] flex flex-col gap-16'>
                            <div id='started' className="flex flex-col gap-4 lg:pt-24">
                                <h1 className='text-primary lg:text-[36px] font-bold text-[20px]'>Getting Started</h1>

                                <div className='flex flex-col gap-3'>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">What services does Crest Bank offer?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Crest Bank provides a wide range of banking services including personal and business accounts, loans, mortgages, investment options, online banking, trading, Bitcoin services, and more.</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">How can I open an account with Crest Bank?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Opening an account with Crest Bank is simple. You can apply online through our website. Our friendly staff will guide you through the process and help you choose the account that best suits your needs.</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">What are the benefits of banking with Crest?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Banking with Crest offers numerous benefits including personalized service, innovative banking solutions, top-notch security measures, competitive interest rates, and a strong commitment to community involvement.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='how' className="flex flex-col gap-4 lg:pt-24">
                                <h1 className='text-primary lg:text-[36px] font-bold text-[20px]'>How Crest Bank works</h1>

                                <div className='flex flex-col gap-3'>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" defaultChecked />
                                        <div className="collapse-title text-xl font-medium text-primary">What’s special about Crest bank?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>What sets Crest Bank apart is its unwavering commitment to excellence, innovation, and personalized service. Here's what makes Crest special: Personalized Approach: Crest Bank understands that every customer is unique, and thus, it offers tailored banking solutions to meet individual needs. Innovative Technology: The bank embraces cutting-edge technology to provide convenient and efficient banking experiences. From online and mobile banking platforms to advanced security measures, Crest stays at the forefront of innovation. Community Focus: Crest Bank is deeply rooted in the communities it serves, actively participating in local initiatives and giving back through philanthropic efforts. Strong Financial Solutions: With a comprehensive range of banking products and services, including loans, mortgages, investment options, and more, Crest helps customers achieve their financial goals. Exceptional Service: The bank prides itself on delivering exceptional customer service, with knowledgeable staff ready to assist customers every step of the way. Commitment to Security: Crest Bank prioritizes the security of its customers' financial information, employing robust security measures to protect against unauthorized access and fraud. Transparency and Integrity: Crest operates with transparency and integrity, ensuring customers have access to clear and accurate information to make informed financial decisions. Longstanding Reputation: With a heritage rooted in reliability and trust, Crest Bank has earned a strong reputation for its dedication to customer satisfaction and community involvement. Flexibility and Convenience: Whether through online banking, mobile apps, or in-person branch visits, Crest Bank offers flexible and convenient banking options to suit customers' preferences and lifestyles. Forward-Thinking Vision: Crest Bank is committed to staying ahead of the curve, continuously evolving to meet the changing needs of its customers and the banking industry.</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">What problem does Crest Bank solve?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Crest Bank addresses several common challenges faced by individuals, businesses, and communities in the banking sector. Here are some of the key problems Crest solves: Lack of Personalization: Many banks offer one-size-fits-all solutions, which may not fully address the unique needs of customers. Crest provides personalized banking services tailored to each individual or business, ensuring that their specific financial goals and circumstances are understood and met. Limited Access to Innovative Technology: Traditional banks may lag behind in adopting and implementing innovative banking technologies, making it challenging for customers to access convenient and efficient banking services. Crest leverages cutting-edge technology to provide seamless online and mobile banking experiences, allowing customers to manage their finances anytime, anywhere. Community Disengagement: Some banks may focus solely on profit-driven objectives, neglecting their role as active participants in community development and social responsibility. Crest Bank actively engages with local communities through philanthropic efforts, sponsorships, and community outreach programs, strengthening the bond between the bank and its customers. Complex Financial Solutions: Navigating the complexities of financial products and services can be daunting for individuals and businesses. Crest simplifies the process by offering a comprehensive range of banking solutions, including loans, mortgages, investment options, and more, with expert guidance and support every step of the way. Security Concerns: With the rise of cyber threats and financial fraud, ensuring the security of personal and financial information is paramount. Crest Bank prioritizes security, implementing advanced encryption technologies and robust security measures to protect customers' data and transactions, providing peace of mind to customers. Limited Transparency and Accountability: Some banks may lack transparency in their operations, leading to distrust among customers. Crest operates with integrity and transparency, providing clear and accurate information to customers, fostering trust and accountability in all banking interactions. Overall, Crest Bank addresses these challenges by offering personalized, technologically advanced, community-focused, secure, transparent, and accountable banking solutions, ultimately empowering individuals, businesses, and communities to achieve their financial goals and thrive.</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">How does Crest Bank differ from usual apps?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Crest Bank stands out from other banks in several distinct ways: Personalized Approach: Unlike larger banks that offer standardized services, Crest prioritizes personalized banking experiences, tailoring solutions to meet individual needs. Innovative Technology: Crest embraces cutting-edge technology, providing seamless online and mobile banking platforms, and implementing advanced security measures to protect customer data. Community Commitment: Crest is deeply invested in the communities it serves, actively engaging in local initiatives and philanthropic efforts to make a positive impact. Comprehensive Solutions: From personal and business banking to loans, mortgages, and investment services, Crest offers a wide range of financial solutions to meet diverse needs. Superior Customer Service: Crest sets itself apart with exceptional customer service, offering knowledgeable support and guidance to assist customers every step of the way. Focus on Security: With robust encryption and stringent security protocols, Crest prioritizes the security of its customers' financial information, ensuring peace of mind. Transparent Operations: Crest operates with transparency and integrity, providing clear and accurate information to customers and adhering to regulatory standards. Flexibility and Convenience: Crest offers flexible banking options and convenient access to accounts through online, mobile, and in-person channels. Proven Track Record: With a longstanding reputation for reliability and trustworthiness, Crest has earned the loyalty of its customers over the years. Forward-Thinking Vision: Crest is committed to staying ahead of the curve, continuously evolving to meet the changing needs of its customers and the banking industry. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='services' className='flex flex-col gap-4 lg:pt-24'>
                                <h1 className='text-primary lg:text-[36px] font-bold text-[20px]'>Services</h1>

                                <div className='flex flex-col gap-3'>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" defaultChecked />
                                        <div className="collapse-title text-xl font-medium text-primary">Personal Banking?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Checking Accounts: Secure and convenient checking accounts tailored to meet your everyday banking needs. Savings Accounts: Various savings options including high-yield savings accounts to help you reach your financial goals. Certificates of Deposit (CDs): Fixed-term investment options with competitive interest rates for long-term savings. Debit and Credit Cards: Convenient payment solutions with rewards programs and fraud protection. Online and Mobile Banking: Access your accounts, pay bills, transfer funds, and more, anytime and anywhere.</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">What are the features of Crest Bank Business Banking?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Business Checking Accounts: Flexible checking solutions designed to streamline your business finances. Business Savings Accounts: Savings options to help your business grow and thrive. Business Loans: Financing options including lines of credit, term loans, and Small Business Administration (SBA) loans. Merchant Services: Payment processing solutions to help businesses accept card payments seamlessly. Business Online Banking: Manage your business accounts, view transaction history, and initiate wire transfers online.</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">What is our mission?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>At Crest Bank, we are committed to providing comprehensive financial solutions to individuals, businesses, and communities, backed by exceptional service and expertise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='loans' className='flex flex-col gap-4 lg:pt-24'>
                                <h1 className='text-primary lg:text-[36px] font-bold text-[20px]'>Savings Plans</h1>

                                <div className='flex flex-col gap-3'>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" defaultChecked />
                                        <div className="collapse-title text-xl font-medium text-primary">Are there any fees associated with savings plans at Crest Bank?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Crest Bank provides a wide range of banking services including personal and business accounts, loans, mortgages, investment options, online banking, trading, Bitcoin services, and more.</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">Can I access my savings plan online?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Yes, you can access your savings plan online through Crest Bank's secure online banking platform. With online banking, you can view your account balance, transfer funds, set up automatic transfers, and more, 24/7 from anywhere with an internet connection.</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">Can I cancel my savings plan at any time?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Your savings plan is scheduled for a period of which you are not expected to access the fund. When it is due, you will be able to withdraw your balance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='update' className='flex flex-col gap-4 lg:pt-24'>
                                <h1 className='text-primary lg:text-[36px] font-bold text-[20px]'>Updating Account</h1>

                                <div className='flex flex-col gap-3'>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" defaultChecked />
                                        <div className="collapse-title text-xl font-medium text-primary">How can I edit my personal information?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>

                                                Log In to Your Account: Access your online banking account using your username and password. If you haven't enrolled in online banking yet, you may need to do so first. Navigate to Profile Settings: Once logged in, look for a menu option or tab labeled "Profile Settings," "Account Settings," or similar. This is typically located in the main menu or navigation bar of your online banking dashboard. Select Personal Information: Within the Profile Settings section, there should be an option to edit your personal information. Click on this option to proceed. Update Your Details: You'll likely see fields where you can edit various personal details such as your name, address, phone number, email address, and any other relevant information. Make the necessary changes. Verify Changes: After updating your information, review it carefully to ensure accuracy. Double-check all fields before proceeding. Save Changes: Once you're satisfied with the updates, look for a "Save Changes" or "Update Information" button. Click on it to save your edits. Confirmation: You may receive a confirmation message indicating that your changes have been successfully saved. Keep an eye out for this confirmation to ensure that your updates were processed correctly. Log Out: For security purposes, it's a good practice to log out of your online banking account after making any changes to your personal information. This helps protect your account from unauthorized access.
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div id='security' className='flex flex-col gap-4'>
                                <h1 className='text-primary lg:text-[36px] font-bold text-[20px]'>Security</h1>

                                <div className='flex flex-col gap-3'>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" defaultChecked />
                                        <div className="collapse-title text-xl font-medium text-primary">How does Crest Bank protect my personal and financial information?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Crest Bank employs industry-leading security measures such as encryption, firewalls, multi-factor authentication, and secure socket layer (SSL) technology to safeguard your personal and financial information from unauthorized access.</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">Is online banking with Crest Bank safe?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Yes, online banking with Crest Bank is safe and secure. Our online banking platform utilizes advanced security protocols to protect your account information and transactions. We also recommend following best practices for online security, such as using strong, unique passwords and keeping your login credentials confidential.</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-white">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium text-primary">Does Crest Bank offer fraud monitoring services?</div>
                                        <div className="collapse-content">
                                            <p className='text-primary'>Yes, Crest Bank provides fraud monitoring services to help detect and prevent fraudulent activity on your accounts. Our sophisticated monitoring systems analyze transaction patterns and alert you to any suspicious activity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqOne