import { useStaticQuery, graphql } from 'gatsby';
import { useLocale } from '../hooks/locale';

function useTranslations() {
  // Grab the locale (passed through context) from the Locale Provider 
  // through useLocale() hook
  const { locale } = useLocale();
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query);

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    };
  });

  // Only return translations for the current locale
  const { translations } = simplified.filter(
    lang => lang.name === locale,
  )[0];

  return translations;
}

export default useTranslations;

const query = graphql`
  query useTranslations {
    rawData: allFile(
      filter: { sourceInstanceName: { eq: "translations" } }
    ) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            lang
            registerLink
            homeRegisterButton

            newsUrl
            homeBlogTitle
            homeBlogSubtitle
            homeBlogButton

            blogBackToHomepage

            aboutUrl
            aboutTitle
            aboutSubtitle
            aboutRegisterButton
            aboutDocumentsButton

            cotisationUrl
            cotisationTitle
            cotisationSubtitle
            brochure_1_title
            brochure_2_title
            brochure_3_title
            brochureRegisterButton

            paymentsTitle
            paymentsSubtitle
            paymentsTitle
            paymentsSubtitle
            paymentsMethodsTitle
            paymentsMethod_1
            paymentsMethod_2
            paymentsBankAccountTitle
            paymentsBankAccountName
            paymentsBankAccountAddress
            paymentsBankAccountNumber
            paymentsBankAccountPhone
            paymentsBankAccountDescription
            paymentsDisclaimer

            organizersUrl
            organizersDetailsUrl
            organizersTitle
            organizersSubtitle
            organizer_1_Name
            organizer_1_Role
            organizer_1_Description
            organizer_2_Name
            organizer_2_Role
            organizer_2_Description
            organizer_3_Name
            organizer_3_Role
            organizer_3_Description
            organizer_4_Name
            organizer_4_Role
            organizer_4_Description
            organizer_5_Name
            organizer_5_Role
            organizer_5_Description
            organizer_6_Name
            organizer_6_Role
            organizer_6_Description
            organizer_7_Name
            organizer_7_Role
            organizer_7_Description
            organizer_8_Name
            organizer_8_Role
            organizer_8_Description
            organizersBoardButtonLink
            organizersBoardButton
            organizerDetailsBackButton

            sponsorsTitle
            sponsorsSubtitle
            sponsorsSignupButton

            partnersTitle
            partnersSubtitle
            partnersSignupButton

            contactUrl
            contactTitle
            contactSubtitle
            contactFormNameLabel
            contactFormEmailLabel
            contactFormSubjectLabel
            contactFormMessageLabel
            contactFormSubmitButton
            contactInfoTitle
            contactInfoText
            contactDetailsTitle
            contactPresidentRole
            contactOrganizerRole

            footerCopyright

            archiveTitle
            archiveSubtitle
            archiveGalleryUrl
            archiveGalleryShowMore
            archiveBackToHomepage

            documentsUrl
            documentsTitle
            documentsSubtitle

            boardUrl
            boardTitle
            boardSubtitle
          }
        }
      }
    }
  }
`;