import TermsConditions from "@/components/termCondition/TermsConditions"

export const metadata = {
  title: 'Terms & Conditions | Job Ki Tyaari Guidelines',
  description: 'Read Job Ki Tyaari’s terms and conditions to understand our website policies, user responsibilities, and legal guidelines.',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },

}
const page = () => {
  return (
    <div>
        <TermsConditions/>
    </div>
  )
}

export default page
