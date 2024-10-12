<template>
  <div>
    <h1>{{ companyData.companyName }}</h1>
    <v-progress-circular :value="companyData.ZeroTrustScore" color="blue" size="100" width="15">
      {{ companyData.ZeroTrustScore }}
    </v-progress-circular>
    <h2>Risk Category: {{ companyData.riskCategory }}</h2>
    <v-progress-linear :value="companyData.metrics.ShannonEntropyScore * 10" color="green">
      Shannon Entropy Score: {{ companyData.metrics.ShannonEntropyScore }}
    </v-progress-linear>
    <p>Firewall Detected: {{ companyData.metrics.firewallDetected ? 'Yes' : 'No' }}</p>
    <p>Open Ports Detected: {{ companyData.metrics.openPortsDetected }}</p>
    <p>TLS Version: {{ companyData.metrics.tlsVersion }}</p>
    <p>Security Headers: {{ companyData.metrics.securityHeadersImplemented.join(', ') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
     companies: [
        {
          companyName: "FinTechSecure Ltd.",
          ZeroTrustScore: 58.5,
          metrics: {
            ShannonEntropyScore: 7.8,
            firewallDetected: true,
            DNSsecEnabled: true,
            tlsVersion: "1.2",
            certificateBitStrength: 2048,
            securityHeadersImplemented: ["X-XSS-Protection", "X-Frame-Options"],
            openPortsDetected: 12
          },
          riskCategory: "Moderate Risk"
        },
        {
          companyName: "CyberSafe Corp.",
          ZeroTrustScore: 75.3,
          metrics: {
            ShannonEntropyScore: 9.1,
            firewallDetected: false,
            DNSsecEnabled: true,
            tlsVersion: "1.3",
            certificateBitStrength: 4096,
            securityHeadersImplemented: ["X-Content-Type-Options"],
            openPortsDetected: 5
          },
          riskCategory: "Low Risk"
        },
        // 
      ]




    };
  }
}
</script>
