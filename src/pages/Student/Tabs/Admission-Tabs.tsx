import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader } from "@/components/ui/card"
import { User, Users, FileText, Upload } from "lucide-react"
import SinglePageStudent from "../Forms/Single-Page-Student"
import BulkPageStudent from "../Forms/Bulk-Page-Student"

export default function AdmissionTabs() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-20 p-2 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl relative overflow-hidden mb-8">
          {/* Edge design elements */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"></div>

          <TabsTrigger
            value="single"
            className="flex items-center gap-4 h-16 text-lg font-semibold text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:backdrop-blur-xl data-[state=active]:border data-[state=active]:border-blue-500/80 rounded-2xl transition-all duration-500 hover:bg-white/30 relative overflow-hidden group z-10"
          >
            <User className="h-6 w-6 relative z-10" />
            <span className="relative z-10">Single Admission</span>
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="flex items-center gap-4 h-16 text-lg font-semibold text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:backdrop-blur-xl data-[state=active]:border data-[state=active]:border-blue-500/80 rounded-2xl transition-all duration-500 hover:bg-white/30 relative overflow-hidden group z-10"
          >
            <Users className="h-6 w-6 relative z-10" />
            <span className="relative z-10">Bulk Student Admission</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="single" className="mt-0">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <CardHeader className="text-left pb-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <SinglePageStudent/>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="bulk" className="mt-0">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
            <CardHeader className="text-left pb-8">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                <Upload className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
            <BulkPageStudent/>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
