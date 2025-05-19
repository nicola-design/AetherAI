
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">1. Introduction</h2>
            <p>Welcome to AetherAI. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@aetherai.com.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.</p>
            <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following: names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; and other similar information.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">3. How We Use Your Information</h2>
            <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">4. Will Your Information Be Shared With Anyone?</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">5. How Long Do We Keep Your Information?</h2>
            <p>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">6. How Do We Keep Your Information Safe?</h2>
            <p>We aim to protect your personal information through a system of organizational and technical security measures.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">7. What Are Your Privacy Rights?</h2>
            <p>In some regions (like the European Economic Area), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">8. Updates To This Notice</h2>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">9. How Can You Contact Us About This Notice?</h2>
            <p>If you have questions or comments about this notice, you may email us at privacy@aetherai.com or by post to:</p>
            <p>AetherAI<br />123 AI Street<br />Innovation City, TX 75001<br />United States</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
