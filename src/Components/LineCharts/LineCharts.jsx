import { LineChart as Lchart, Line , XAxis,YAxis } from 'recharts';

const LineCharts = () => {
    const mathMarksData = [
        { id: 1, student: "Student 1", mathMarks: 85, physicsMarks: 78, chemistryMarks: 92 },
        { id: 2, student: "Student 2", mathMarks: 72, physicsMarks: 65, chemistryMarks: 80 },
        { id: 3, student: "Student 3", mathMarks: 90, physicsMarks: 88, chemistryMarks: 94 },
        { id: 4, student: "Student 4", mathMarks: 78, physicsMarks: 72, chemistryMarks: 85 },
        { id: 5, student: "Student 5", mathMarks: 95, physicsMarks: 90, chemistryMarks: 96 },
        { id: 6, student: "Student 6", mathMarks: 88, physicsMarks: 82, chemistryMarks: 91 },
        { id: 7, student: "Student 7", mathMarks: 68, physicsMarks: 60, chemistryMarks: 75 },
        { id: 8, student: "Student 8", mathMarks: 75, physicsMarks: 68, chemistryMarks: 78 },
        { id: 9, student: "Student 9", mathMarks: 91, physicsMarks: 84, chemistryMarks: 93 },
        { id: 10, student: "Student 10", mathMarks: 82, physicsMarks: 76, chemistryMarks: 88 },
      ];
      
    return (
        <div>
            <Lchart width={800} height={400} data={mathMarksData}> 
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Line dataKey="mathMarks"></Line>
            <Line dataKey="physicsMarks"  stroke="#8884d8"></Line>
            </Lchart>
        </div>
    );
};

export default LineCharts;