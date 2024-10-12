<template>
  <div id="app">
    <div v-for="company in companies" :key="company.companyName" class="company-widget">
      <h1>{{ company.companyName }}</h1>
      
      <!-- הצגת ציון האמון האפסי -->
      <v-progress-circular :value="company.ZeroTrustScore" color="blue" size="100" width="15">
        {{ company.ZeroTrustScore }}
      </v-progress-circular>

      <!-- הצגת קטגוריית הסיכון -->
      <h2>Risk Category: {{ company.riskCategory }}</h2>

      <!-- הצגת מדדים נוספים -->
      <v-progress-linear :value="company.metrics.ShannonEntropyScore * 10" color="green">
        Shannon Entropy Score: {{ company.metrics.ShannonEntropyScore }}
      </v-progress-linear>
      <p>Firewall Detected: {{ company.metrics.firewallDetected ? 'Yes' : 'No' }}</p>
      <p>Open Ports Detected: {{ company.metrics.openPortsDetected }}</p>
      <p>TLS Version: {{ company.metrics.tlsVersion }}</p>
      <p>Security Headers: {{ company.metrics.securityHeadersImplemented.join(', ') }}</p>
    </div>
  </div>
</template>

<style>
.company-widget {
  margin-bottom: 40px;
}
</style>
