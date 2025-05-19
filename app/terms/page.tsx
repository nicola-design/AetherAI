
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">1. Agreement to Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on AetherAI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on AetherAI's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by AetherAI at any time.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">3. Disclaimer</h2>
            <p>The materials on AetherAI's website are provided on an 'as is' basis. AetherAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">4. Limitations</h2>
            <p>In no event shall AetherAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AetherAI's website, even if AetherAI or a AetherAI authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">5. Accuracy of Materials</h2>
            <p>The materials appearing on AetherAI's website could include technical, typographical, or photographic errors. AetherAI does not warrant that any of the materials on its website are accurate, complete or current. AetherAI may make changes to the materials contained on its website at any time without notice. However AetherAI does not make any commitment to update the materials.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">6. Links</h2>
            <p>AetherAI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AetherAI of the site. Use of any such linked website is at the user's own risk.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">7. Modifications</h2>
            <p>AetherAI may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of Texas, United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at legal@aetherai.com.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
