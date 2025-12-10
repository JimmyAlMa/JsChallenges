// Product Survey Response Summary
// Challenge from Google Gemini AI

const surveyResponses = [
    {
        respondentID: 'U1001',
        region: 'Jakarta',
        score: 9, // Skala 1-10
        purchaseFrequency: 4, // Jumlah pembelian per bulan
        isLoyaltyMember: true
    },
    {
        respondentID: 'U1002',
        region: 'Surabaya',
        score: 3,
        purchaseFrequency: 1,
        isLoyaltyMember: false
    },
    {
        respondentID: 'U1003',
        region: 'Jakarta',
        score: 10,
        purchaseFrequency: 8, // Frekuensi tertinggi
        isLoyaltyMember: true
    },
    {
        respondentID: 'U1004',
        region: 'Bandung',
        score: 7,
        purchaseFrequency: 2,
        isLoyaltyMember: false
    },
];

function surveyReport(surveyResponses) {
    const firstValue = {
        satisfactionScore: 0,
        totalPurchaseFrequency: 0,
        totalPurchasesInJakarta: 0,
        topScoreMember: []
    }

    return surveyResponses.reduce((acc, respondent) => {
        acc.satisfactionScore += respondent.score;
        acc.totalPurchaseFrequency += respondent.purchaseFrequency;

        if (respondent.region === 'Jakarta') {
            acc.totalPurchasesInJakarta += respondent.purchaseFrequency;
        }

        if (respondent.score >= 8) {
            acc.topScoreMember.push(respondent.respondentID);
        }

        return acc;
    }, firstValue);
}
const createSurveyReport = surveyReport(surveyResponses);
console.log(createSurveyReport)