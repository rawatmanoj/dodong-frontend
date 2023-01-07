import Header from "@/components/header";
import React from "react";

export default function TermsPage() {
  const contents = [
    {
      title: `Dodongs’ Terms & Conditions`,
      content: [
        "At Dodong, accessible from www.dodong.in, one of our main priorities is the privacy of our visitors. This\
        Privacy Policy document contains types of information that is collected and recorded by Dodong and\
        how we use it.",
        "If you have additional questions or require more information about our Privacy Policy, do not hesitate to\
        contact us.",
        "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards\
        to the information that they shared and/or collect in Dodong. This policy is not applicable to any\
        information collected offline or via channels other than this website. Our Privacy Policy was created with\
        the help of the Free Privacy Policy Generator",
      ],
    },
    {
      title: `Cookies`,
      content: [],
    },
    {
      title: `License`,
      content: [
        `Unless otherwise stated, Dodong Private Limited and/or its licensors own the intellectual property rights
        for all material on Dodong. All intellectual property rights are reserved. You may access this from
        Dodong for your own personal use subjected to restrictions set in these terms and conditions.
        `,
        `You must not:
        `,
        `1. Republish material from Dodong
        `,
        `2. Sell, rent or sub-license material from Dodong
        `,
        `3. Reproduce, duplicate or copy material from Dodong
        `,
        `4. Redistribute content from Dodong
        `,
        `This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of
        the Terms and Conditions Template.`,
        `Parts of this website offer an opportunity for users to post and exchange opinions and information in
        certain areas of the website. Dodong Private Limited does not filter, edit, publish or review Comments 
        prior to their presence on the website. Comments do not reflect the views and opinions of Dodong
        `,
        `Private Limited,its agents and/or affiliates. Comments reflect the views and opinions of the person who
        post their views and opinions. To the extent permitted by applicable laws, Dodong Private Limited shall
        not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a
        result of any use of and/or posting of and/or appearance of the Comments on this website.
        `,
        `Dodong Private Limited reserves the right to monitor all Comments and to remove any Comments which
        can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
        `,
        `You warrant and represent that:
        `,
        `You are entitled to post the Comments on our website and have all necessary licenses and consents to
        do so;
        `,
        `The Comments do not invade any intellectual property right, including without limitation copyright,
        patent or trademark of any third party;
        `,
        `The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful
        material which is an invasion of privacy
        `,
        `The Comments will not be used to solicit or promote business or custom or present commercial
        activities or unlawful activity.`,
        `You hereby grant Dodong Private Limited a non-exclusive license to use, reproduce, edit and authorize
        others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
        `,
        `Hyperlinking to our Content
        `,
        `The following organizations may link to our Website without prior written approval:
        `,
        `Government agencies;
        `,
        `Search engines;
        `,
        `News organizations;
        `,
        `Online directory distributors may link to our Website in the same manner as they hyperlink to the
        `,
        `Websites of other listed businesses; and
        `,
        `System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls,
        and charity fundraising groups which may not hyperlink to our Web site.
        `,
        `These organizations may link to our home page, to publications or to other Website information so long
        as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or
        approval of the linking party and its products and/or services; and (c) fits within the context of the
        linking party’s site.
        `,
        `We may consider and approve other link requests from the following types of organizations:
        commonly-known consumer and/or business information sources; dot.com community sites;`,
        `associations or other groups representing charities; online directory distributors; internet portals;
        accounting, law and consulting firms; and educational institutions and trade associations.
        `,
        `We will approve link requests from these organizations if we decide that: (a) the link would not make us
        look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any
        negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the
        absence of Dodong Private Limited; and (d) the link is in the context of general resource information.
        `,
        `These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b)
        does not falsely imply sponsorship, endorsement or approval of the linking party and its products or
        services; and (c) fits within the context of the linking party’s site.
        `,
        `If you are one of the organizations listed in paragraph 2 above and are interested in linking to our
        website, you must inform us by sending an e-mail to Dodong Private Limited. Please include your name,
        your organization name, contact information as well as the URL of your site, a list of any URLs from
        which you intend to link to our Website, and a list of the URLs on our site to which you would like to link.
        `,
        `Wait 2-3 weeks for a response.
        `,
        `Approved organizations may hyperlink to our Website as follows:
        `,
        `By use of our corporate name; or
        `,
        `By use of the uniform resource locator being linked to; or
        `,
        `By use of any other description of our Website being linked to that makes sense within the context and
        format of content on the linking party’s site.
        `,
        `No use of Dodong Private Limited's logo or other artwork will be allowed for linking absent a trademark
        license agreement.`,
      ],
    },
    {
      title: `iFrames`,
      content: [
        `Without prior approval and written permission, you may not create frames around our Webpages that
        alter in any way the visual presentation or appearance of our Website.`,
      ],
    },
    {
      title: `Content Liability`,
      content: [
        `We shall not be hold responsible for any content that appears on your Website. You agree to protect
      and defend us against all claims that is rising on your Website. No link(s) should appear on any Website
      that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or
      advocates the infringement or other violation of, any third party rights.`,
      ],
    },
    {
      title: `Your Privacy`,
      content: [`Please read Privacy Policy`],
    },
    {
      title: `Reservation of Rights`,
      content: [
        `We reserve the right to request that you remove all links or any particular link to our Website. You
      approve to immediately remove all links to our Website upon request. We also reserve the right to 
      amen these terms and conditions and it’s linking policy at any time. By continuously linking to our
      Website, you agree to be bound to and follow these linking terms and conditions.`,
      ],
    },
    {
      title: `Removal of links from our website`,
      content: [
        `If you find any link on our Website that is offensive for any reason, you are free to contact and inform us
        any moment. We will consider requests to remove links but we are not obligated to or so or to respond
        to you directly.
        We do not ensure that the information on this website is correct, we do not warrant its completeness or
        accuracy; nor do we promise to ensure that the website remains available or that the material on the
        website is kept up to date`,
      ],
    },
    {
      title: `Disclaimer`,
      content: [
        `To the maximum extent permitted by applicable law, we exclude all representations, warranties and
        conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        limit or exclude our or your liability for death or personal injury;
        limit or exclude our or your liability for fraud or fraudulent misrepresentation;
        limit any of our or your liabilities in any way that is not permitted under applicable law; or
        exclude any of our or your liabilities that may not be excluded under applicable law.
        The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are
        subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including
        liabilities arising in contract, in tort and for breach of statutory duty.
        As long as the website and the information and services on the website are provided free of charge, we
        will not be liable for any loss or damage of any nature.`,
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div className="container text-justify m-auto">
        <h1 className="text-4xl font-bold text-center">
          Dodongs{`'`} Terms & Conditions
        </h1>

        {contents.map((content, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-2 mt-4">{content.title}</h2>
            <ul>
              {content.content.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
