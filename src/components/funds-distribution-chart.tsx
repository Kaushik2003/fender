"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Investors", value: 45, color: "#8B5CF6" },
  { name: "Core Team", value: 25, color: "#06B6D4" },
  { name: "Community", value: 20, color: "#10B981" },
  { name: "Liquidity", value: 10, color: "#F59E0B" },
]

export function FundsDistributionChart() {
  return (
    <Card className="bg-[color:var(--card)] border-[color:var(--border)] rounded-xl">
      <CardHeader>
        <CardTitle className="text-white">Funds Distribution</CardTitle>
        <p className="text-white/60 text-sm">Token allocation across different groups</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  color: "white",
                }}
              />
              <Legend wrapperStyle={{ color: "#e6e6e6" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
