<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-title
        >Zero-Trust Score Widget for {{ data?.companyName }}</v-card-title
      >
      <v-card-subtitle>
        Risk Category:
        <span :class="riskColorClass">{{ data?.riskCategory }}</span>
      </v-card-subtitle>

      <!-- Overall Zero-Trust Score -->
      <v-row class="my-4">
        <v-col>
          <v-progress-circular
            :value="data?.ZeroTrustScore"
            :size="100"
            :color="scoreColor"
          >
            {{ data?.ZeroTrustScore }}%
          </v-progress-circular>
        </v-col>
      </v-row>

      <!-- Individual Metrics -->
      <v-row v-for="(value, key) in data?.metrics" :key="key" class="mb-3">
        <v-col cols="6">
          <strong>{{ key }}</strong>
          <p>{{ metricDescriptions[key] }}</p>
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            :value="value"
            :color="getMetricColor(value)"
            height="10"
          ></v-progress-linear>
          <span>{{ value }}%</span>
        </v-col>
      </v-row>

      <!-- Observable Data (Additional Info) -->
      <v-row>
        <v-col>
          <strong>Observable Data:</strong>
          <v-row
            v-for="(value, key) in data?.observableData"
            :key="key"
            class="my-2"
          >
            <template v-if="String(key) !== 'securityHeadersImplemented'">
              <v-divider class="my-2"></v-divider>
            </template>
            <v-col cols="3" class="d-flex align-center">
              <v-icon
                v-if="typeof value === 'boolean'"
                :color="value ? 'success' : 'error'"
              >
                {{ value ? 'mdi-check-circle' : 'mdi-close-circle' }}
              </v-icon>
              <strong>{{ key }}:</strong>
            </v-col>
            <v-col cols="9">
              <div v-if="Array.isArray(value)">
                <v-row>
                  <v-col v-for="(item, index) in value" :key="index" cols="12">
                    - {{ item }}
                  </v-col>
                </v-row>
              </div>
              <div v-else>{{ value }}</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        data: null,
        metricDescriptions: {
          Authentication: 'Measures strength of authentication mechanisms.',
          AccessControl: 'Evaluates access control policies.',
          DataProtection: 'Analyzes data protection measures.',
          Monitoring: 'Examines continuous monitoring capabilities.',
          RiskAssessment: 'Assesses risk evaluation practices.',
        },
      }
    },
    computed: {
      riskColorClass() {
        return {
          'text-success': this.data && this.data.riskCategory === 'Low Risk',
          'text-warning':
            this.data && this.data.riskCategory === 'Moderate Risk',
          'text-error': this.data && this.data.riskCategory === 'High Risk',
        }
      },
      scoreColor() {
        if (!this.data) return 'grey'
        if (this.data.ZeroTrustScore >= 75) return 'success'
        if (this.data.ZeroTrustScore >= 50) return 'warning'
        return 'error'
      },
    },
    methods: {
      async fetchData() {
        //it has to be from an external source
        this.data = {
          companyName: 'FinTechSecure Ltd.',
          ZeroTrustScore: 58.5,
          metrics: {
            Authentication: 70,
            AccessControl: 60,
            DataProtection: 50,
            Monitoring: 55,
            RiskAssessment: 65,
          },
          observableData: {
            averageShannonEntropyScore: 7.8,
            firewallDetected: true,
            DNSsecEnabled: true,
            tlsVersion: '1.2',
            certificateBitStrength: 2048,
            securityHeadersImplemented: ['X-XSS-Protection', 'X-Frame-Options'],
            openPortsDetected: 12,
          },
          riskCategory: 'Moderate Risk',
        }
      },
      getMetricColor(score) {
        if (score >= 75) return 'success'
        if (score >= 50) return 'warning'
        return 'error'
      },
    },
    created() {
    //loading the data
      this.fetchData()
    },
  }
</script>


