
"use client"

import { Sidebar } from "@/components/sidebar"
import { StatsCards } from "@/components/stats-cards"
import { FundsDistributionChart } from "@/components/funds-distribution-chart"
import { AllocationMetricsChart } from "@/components/allocation-metrics-chart"
import { MyCompaniesTable } from "@/components/my-companies-table"
import { MyTokensTable } from "@/components/my-tokens-table"
import { RecentActivity } from "@/components/recent-activity"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-white/60">Overview of your token allocations and company investments</p>
          </div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FundsDistributionChart />
            <AllocationMetricsChart />
          </div>

          {/* Tables */}
          <MyCompaniesTable />
          <MyTokensTable />

          {/* Recent Activity */}
          <RecentActivity />
        </div>
      </main>
    </div>
  )
}

