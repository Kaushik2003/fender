"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  {
    group: "Investors",
    vested: 1200000,
    remaining: 800000,
  },
  {
    group: "Core Team",
    vested: 600000,
    remaining: 900000,
  },
  {
    group: "Community",
    vested: 400000,
    remaining: 600000,
  },
  {
    group: "Liquidity",
    vested: 300000,
    remaining: 200000,
  },
]

export function AllocationMetricsChart() {
  return (
    <Card className="bg-black/20 backdrop-blur-xl border-white/10 rounded-xl">
      <CardHeader>
        <CardTitle className="text-white">Allocation Metrics</CardTitle>
        <p className="text-white/60 text-sm">Vested vs remaining tokens by group</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis
                dataKey="group"
                tick={{ fill: "white", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
              />
              <YAxis tick={{ fill: "white", fontSize: 12 }} axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  color: "white",
                }}
              />
              <Legend wrapperStyle={{ color: "white" }} />
              <Bar dataKey="vested" fill="#10B981" name="Vested" radius={[4, 4, 0, 0]} />
              <Bar dataKey="remaining" fill="#8B5CF6" name="Remaining" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
