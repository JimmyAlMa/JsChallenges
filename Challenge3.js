// Graphic Designer Team Analyisis
// Challenge from Google Gemini AI

const projectTeam = [
    {
        designerName: 'Andy',
        role: 'Senior UI/UX',
        monthlyCost: 15000000,
        currentTasks: 5,
        maxCapacity: 10
    },
    {
        designerName: 'Bella',
        role: 'Junior Illustrator',
        monthlyCost: 7000000,
        currentTasks: 9,
        maxCapacity: 10
    },
    {
        designerName: 'Charlie',
        role: 'Lead Art Director',
        monthlyCost: 25000000,
        currentTasks: 4,
        maxCapacity: 5
    },
    {
        designerName: 'Dina',
        role: 'Motion Designer',
        monthlyCost: 12000000,
        currentTasks: 1,
        maxCapacity: 15
    },
];
function totalTeamSalary(projectTeam) {
    const monthlyCost = projectTeam.map(worker => {
        return worker.monthlyCost;
    });
    const totalMonthlyCost = monthlyCost.reduce((acc, salary) => {
        return acc + salary;
    });
    return totalMonthlyCost;
}


function memberAlmostFull(projectTeam) {
    const workerFilter = projectTeam.filter(worker => {
        const percentWork = (worker.currentTasks / worker.maxCapacity) * 100;
        return percentWork >= 80;
    });
    const hardworkingWorker = workerFilter.map(worker => {
        return {
            name: worker.designerName,
            role: worker.role,
            remainingTask: worker.maxCapacity - worker.currentTasks
        };
    })
    return hardworkingWorker;
}
console.log('Monthly cost: Rp' + totalTeamSalary(projectTeam));
console.log('Members whose capacity is almost full (>= 80%):');
console.log(memberAlmostFull(projectTeam))
