export const welcomeMap = {
    none: 'welcomea',
    one: 'welcomeb',
    all: 'welcomec'
};
export const transitArray = [
    'q3.1',
    'q3.2',
    'q3.3',
    'q3.4',
    'q4',
    'q5',
    'q6',
    'q7',
    'q8',
    'q9',
    'q10',
    'q11',
    'q12',
    'q13',
    'q14',
    'q15',
    'q16',
    'q17',
    'q18',
    'q19',
    'q20'
];
// saby
export const Screen={}
export const navMap = {    
    q1: {
        descr1:`Please Complete the COPD Assesment Test (CAT) below:`,
        section: true,
        reason:'COPD',
        thresholdscore:40,
        sub: [
            {
                text: `How often do you cough?`,
                qno:'Q1',
                options: [
                    {
                        text: `Never`,
                        score: 1,
                        checked: false
                    }, {
                        text: ``,
                        score: 2,
                        checked: false
                    }, {
                        text: ``,
                        score: 3,
                        checked: false
                    }, {
                        text: ``,
                        score: 4,
                        checked: false
                    }, {
                        text: `All the time`,
                        score: 5,
                        checked: false
                    }
                ]
            },
            {
                text: `How much phlegm do you have in your chest?`,
                qno:'Q2',
                options: [
                    {
                        text: `No Phlegm`,
                        score: 1,
                        checked: false
                    }, {
                        text: ``,
                        score: 2,
                        checked: false
                    }, {
                        text: ``,
                        score: 3,
                        checked: false
                    }, {
                        text: ``,
                        score: 4,
                        checked: false
                    }, {
                        text: `Full of Phlegm`,
                        score: 5,
                        checked: false
                    }
                ]
            },
            {
                text: `How tight does your chest feel?`,
                qno:'Q3',
                options: [
                    {
                        text: `Not at All`,
                        score: 1,
                        checked: false
                    }, {
                        text: ``,
                        score: 2,
                        checked: false
                    }, {
                        text: ``,
                        score: 3,
                        checked: false
                    }, {
                        text: ``,
                        score: 4,
                        checked: false
                    }, {
                        text: `Very tight`,
                        score: 5,
                        checked: false
                    }
                ]
            },
            {
                text: `How breathles do you get walking uphill or walking up a flight of stairs`,
                qno:'Q4',
                options: [
                    {
                        text: `Not Breathless`,
                        score: 1,
                        checked: false
                    }, {
                        text: ``,
                        score: 2,
                        checked: false
                    }, {
                        text: ``,
                        score: 3,
                        checked: false
                    }, {
                        text: ``,
                        score: 4,
                        checked: false
                    }, {
                        text: `Very tight`,
                        score: 5,
                        checked: false
                    }
                ]
            },
            {
                text: `Are you limited to doing activities at home?`,
                qno:'Q5',
                options: [
                    {
                        text: `Not at All`,
                        score: 1,
                        checked: false
                    }, {
                        text: ``,
                        score: 2,
                        checked: false
                    }, {
                        text: ``,
                        score: 3,
                        checked: false
                    }, {
                        text: ``,
                        score: 4,
                        checked: false
                    }, {
                        text: `Very Limited`,
                        score: 5,
                        checked: false
                    }
                ]
            },
            {
                text: `Are you confident leaving your home despite your lung condition?`,
                qno:'Q6',
                options: [
                    {
                        text: `Not Confident`,
                        score: 1,
                        checked: false
                    }, {
                        text: ``,
                        score: 2,
                        checked: false
                    }, {
                        text: ``,
                        score: 3,
                        checked: false
                    }, {
                        text: ``,
                        score: 4,
                        checked: false
                    }, {
                        text: `Very Confident`,
                        score: 5,
                        checked: false
                    }
                ]
            },
            {
                text: `How soundly do you sleep because of you lung condition`,
                qno:'Q7',
                options: [
                    {
                        text: `Very Soundly`,
                        score: 1,
                        checked: false
                    }, {
                        text: ``,
                        score: 2,
                        checked: false
                    }, {
                        text: ``,
                        score: 3,
                        checked: false
                    }, {
                        text: ``,
                        score: 4,
                        checked: false
                    }, {
                        text: `Not Soundly`,
                        score: 5,
                        checked: false
                    }
                ]
            },
            {
                text: `How would you rate your energy level`,
                qno:'Q8',
                options: [
                    {
                        text: `Lots of Energy`,
                        score: 1,
                        checked: false
                    }, {
                        text: ``,
                        score: 2,
                        checked: false
                    }, {
                        text: ``,
                        score: 3,
                        checked: false
                    }, {
                        text: ``,
                        score: 4,
                        checked: false
                    }, {
                        text: `No Energy`,
                        score: 5,
                        checked: false
                    }
                ]
             }
        ]
    },
    q2:{
        descr1:`Please complete the Asthma Control Test (ACT) below:`,
        section: true,
        reason:'AST',
        thresholdscore:25,
        jumpTo: 'q3',
        sub:[
            {
                text: `In the past 4 weeks, how much did your asthma keep you from getting as much done at home and/or work?`,
                qno:'Q9',
                options: [
                    {
                        text: `All of the time`,
                        score: 1,
                        checked: false
                    }, {
                        text: `Most of the time`,
                        score: 2,
                        checked: false
                    }, {
                        text: `Some of the time`,
                        score: 3,
                        checked: false
                    }, {
                        text: `A Little of the Time`,
                        score: 4,
                        checked: false
                    }, {
                        text: `None of the Time`,
                        score: 5,
                        checked: false
                    }
                ]
            },
            {
                text: `During the past 4 weeks, how often have you had shortness of breath?`,
                qno:'Q10',
                options: [
                    {
                        text: `More than once a day`,
                        score: 1,
                        jumpTo: 'q11',
                        checked: false
                    }, {
                        text: `Once a day`,
                        score: 2,
                        jumpTo: 'q11',
                        checked: false
                    }, {
                        text: `3 to 6 Times a day`,
                        score: 3,
                        jumpTo: 'q11',
                        checked: false
                    }, {
                        text: `Once or Twice a week`,
                        score: 4,
                        jumpTo: 'q11',
                        checked: false
                    }, {
                        text: `Not at All`,
                        score: 5,
                        jumpTo: 'q11',
                        checked: false
                    }
                ]
            },
            {
                text: `During the past 4 weeks, how often did your asthma symptoms (coughing, wheezing, shortness of breath, chest tightness, or pain) wake you up at night or earlier than usual in the morning`,
                qno:'Q11',
                options: [
                    {
                        text: `4 or more nights a week`,
                        score: 1,
                        checked: false
                    }, {
                        text: `2 to 3 times a week`,
                        score: 2,
                        checked: false
                    }, {
                        text: `Once a week`,
                        score: 3,
                        checked: false
                    }, {
                        text: `Once or Twice`,
                        score: 4,
                        checked: false
                    }, {
                        text: `Not at All`,
                        score: 5,
                        checked: false
                    }
                ]
            },
        ]
    },
    q3: {
        descr1:`Asthma Control Test (ACT) continued`,
        section: true,
        reason:'AST',
        thresholdscore:25,
        jumpTo: 'q3',
        sub:[
            {
                text: `During the past 4 weeks, how often have you used your rescue inhaler or nebulizer medicine (such as albuterol)?`,
                qno:'Q12',
                options: [
                    {
                        text: `3 or more times per day`,
                        score: 1,
                        checked: false
                    }, {
                        text: `1 to 2 times per day`,
                        score: 2,
                        checked: false
                    }, {
                        text: `2 to 3 times per week`,
                        score: 3,
                        checked: false
                    }, {
                        text: `Once a week or less`,
                        score: 4,
                        checked: false
                    }, {
                        text: `Not at All`,
                        score: 5,
                        checked: false
                    }
                ]
            },
            {
                text: `How would you rate your asthma control during the past 4 weeks?`,
                qno:'Q13',
                options: [
                    {
                        text: `Not Controlled`,
                        score: 1,
                        checked: false
                    }, {
                        text: `Poorly Controlled`,
                        score: 2,
                        checked: false
                    }, {
                        text: `Somewhat Controlled`,
                        score: 3,
                        checked: false
                    }, {
                        text: `Well Controlled`,
                        score: 4,
                        checked: false
                    }, {
                        text: `Completely Controlled`,
                        score: 5,
                        checked: false
                    }
                ]
            }
        ]
    },
    q4:{
        descr1:`Dyspnea test (mMRC):`,        
        text: `Select the response that best describes, when you become breathless:`,
        jumpTo: 'q5',
        qno:'Q14',
        options: [
            {
                text: `I only get breathless while strenuous exercise`,
                score: 1,
                checked: false
            }, {
                text: `I get short of breath when hurrying on level ground, or walking up a slight hill`,
                score: 2,
                checked: false
            }, {
                text: `On level ground, I walk slower than people of the same age because of breathlessness, or have to stop for breath when walking at my own pace`,
                score: 3,
                checked: false
            }, {
                text: `I stop for breath after walking about 100 yards, or after a few minutes on level ground`,
                score: 4,
                checked: false
            }, {
                text: `I am too breathless to leave the house, or I am breathless when dressing`,
                score: 5,
                checked: false
            }
        ]
    },
    q5: {
        descr1:'The Quality of your Days',
        text: `Select the response that best describes the quality of your days:`,
        jumpTo: 'q6',
        qno:'Q15',
        options: [
            {
                text: `I have all good days`,
                checked: false
            }, {
                text: `I have more than good days than bad days`,
                checked: false
            }, {
                text: `I have about an equali number of good dayts and bad days`,
                checked: false
            }, {
                text: `I have more bad days than good days`,
                checked: false
            }, {
                text: `I have all bad days`,
                checked: false
            }
        ]
    },
    q6: {
        descr1:`You Activity level`,
        text: `Select the response that best describes your activity level:`,
        jumpTo: 'q7',
        qno:'Q16',
        options: [
            {
                text: `I get exercise most days`,
                checked: false
            }, {
                text: `I get exercies on some days`,
                checked: false
            }, {
                text: `I get exercise occaionally`,
                checked: false
            }
        ]
    },
    q7: {
        descr1:`Please answer the following questions about your health over the last 12 months:`,
        section:true,
        sub:[
         {
            text: `How many exacerbations have you had over the last 12 months?`,
            qno:'Q17',
            options: [
                {
                    text: `0`,
                    checked: false
                }, 
                {
                    text: `1`,
                    checked: false
                }, {
                    text: `2`,
                    checked: false
                }, {
                    text: `3`,
                    checked: false
                }, {
                    text: `4`,
                    checked: false
                }, {
                    text: `5`,
                    checked: false
                },
                {
                    text: `+`,
                    checked: false
                }
            ]
        },
        {
            text: `How many exacerbations lead you to visit the emergency or urgent care?`,
            qno:'Q18',
            options: [
                {
                    text: `0`,
                    checked: false
                }, 
                {
                    text: `1`,
                    checked: false
                }, {
                    text: `2`,
                    checked: false
                }, {
                    text: `3`,
                    checked: false
                }, {
                    text: `4`,
                    checked: false
                }, {
                    text: `5`,
                    checked: false
                },
                {
                    text: `+`,
                    checked: false
                }
            ]
        },{
            text: `How many of the above exacerbations required hospital admission?`,
            qno:'Q19',
            options: [
                {
                    text: `0`,
                    checked: false
                }, 
                {
                    text: `1`,
                    checked: false
                }, {
                    text: `2`,
                    checked: false
                }, {
                    text: `3`,
                    checked: false
                }, {
                    text: `4`,
                    checked: false
                }, {
                    text: `5`,
                    checked: false
                },
                {
                    text: `+`,
                    checked: false
                }
            ]
        },
        {
            text: `Were you prescribed antibiotics by another provider?`,
            qno:'Q20',
            options: [
                {
                    text: `Yes`,
                    checked: false
                }, 
                {
                    text: `No`,
                    checked: false
                }
            ]
        },
        {
            text: `Were you prescribed Prednisone (or similar rescue inhaler) by another provider?`,
            qno:'Q21',
            options: [
                {
                    text: `Yes`,
                    checked: false
                }, 
                {
                    text: `No`,
                    checked: false
                }
            ]
        }
    ]
},
q8: {
    descr1:'Alcohol and Drug Use',
    section:true,
    sub:[
     {
        text: `Do you drink alcohol?`,
        qno:'Q22',
        options: [
            {
                text: `Yes`,
                checked: false
            }, 
            {
                text: `No`,
                checked: false
            }
        ]
    },
    {
        text: `Do you smoke marijuana?`,
        qno:'Q23',
        options: [
            {
                text: `Yes`,
                checked: false
            }, 
            {
                text: `No`,
                checked: false
            }
        ]
    },{
        text: `Do you use recreational drugs?`,
        qno:'Q24',
        options: [
            {
                text: `Yes`,
                checked: false
            }, 
            {
                text: `No`,
                checked: false
            }
        ]
    },
    {
        text: `Do you have a dependency on any substance?`,
        qno:'Q25',
        options: [
            {
                text: `Yes`,
                checked: false
            }, 
            {
                text: `No`,
                checked: false
            }
        ]
    },
        ]
},
q9: {
    descr1:'Your Smoking History',
    section:true,
    sub:[
     {
        text: `Do you live, or frequently visit with someone who smokes?`,
        qno:'Q26',
        options: [
            {
                text: `Yes`,
                checked: false
            }, 
            {
                text: `No`,
                checked: false
            }
        ]
    },
    {
        text: `Have you recently been exposed to:`,
        qno:'Q27',
        options: [
            {
                text: `Non-Tobacco Smoke`,
                checked: false
            }, 
            {
                text: `Dust`,
                checked: false
            },
            {
                text: `Fumes`,
                checked: false
            },
            {
                text: `Chemicals`,
                checked: false
            }
        ]
    },{
        text: `Do you currently use tobacco?`,
        qno:'Q28',
        options: [
            {
                text: `Yes`,
                jumpTo:'Q29',
                checked: false
            }, 
            {
                text: `No`,
                jumpTo:'Q31',
                checked: false
            }
        ]
    },
    {
        text: `If yes, what type of product do you use?`,
        qno:'Q29',
        options: [
            {
                text: `Cigarettes`,
                jumpTo:'Q30a',
                checked: false
            }, 
            {
                text: `Chew`,
                jumpTo:'Q30b',
                checked: false
            }, 
            {
                text: `Pipe`,
                jumpTo:'Q30c',
                checked: false
            }, 
            {
                text: `Cigar`,
                jumpTo:'Q30d',
                checked: false
            }, 
            {
                text: `Electronic Cigarettes`,
                jumpTo:'Q30e',
                checked: false
            }, 
            {
                text: `Snuff`,
                jumpTo:'Q30f',
                checked: false
            }
        ]
    },
    {
        text: `How often do you use/smoke Cigarettes per day?`,
        qno:'Q30a',
        jumpTo:'Q31',
        options: [
            {
                text: `Less than 1 pack per day`,
                checked: false
            }, 
            {
                text: `1 pack per day`,
                checked: false
            }, 
            {
                text: `2 packs per day`,
                checked: false
            }, 
            {
                text: `3 or more packs per day`,
                checked: false
            }
        ]
    },
    {
        text: `How often do you use/smoke Chew per day?`,
        qno:'Q30b',
        jumpTo:'Q31',
        options: [
            {
                text: `Monthly`,
                checked: false
            }, 
            {
                text: `Weekly`,
                checked: false
            }, 
            {
                text: `Daily`,
                checked: false
            }
        ]
    },
    {
        text: `How often do you use/smoke Pipe per day?`,
        qno:'Q30c',
        jumpTo:'Q31',
        options: [
            {
                text: `Monthly`,
                checked: false
            }, 
            {
                text: `Weekly`,
                checked: false
            }, 
            {
                text: `Daily`,
                checked: false
            }
        ]
    },
    {
        text: `How often do you use/smoke Cigar per day?`,
        qno:'Q30d',
        jumpTo:'Q31',
        options: [
            {
                text: `Monthly`,
                checked: false
            }, 
            {
                text: `Weekly`,
                checked: false
            }, 
            {
                text: `Daily`,
                checked: false
            }
        ]
    },
    {
        text: `How often do you use/smoke Electronic Cigarettes per day?`,
        qno:'Q30e',
        jumpTo:'Q31',
        options: [
            {
                text: `Monthly`,
                checked: false
            }, 
            {
                text: `Weekly`,
                checked: false
            }, 
            {
                text: `Daily`,
                checked: false
            }
        ]
    },
    {
        text: `How often do you use/smoke Snuff per day?`,
        qno:'Q30f',
        jumpTo:'Q31',
        options: [
            {
                text: `Monthly`,
                checked: false
            }, 
            {
                text: `Weekly`,
                checked: false
            }, 
            {
                text: `Daily`,
                checked: false
            }
        ]
    },
    {
        text: `How many years have you used tobacco products?`,
        qno:'Q31',
        options: [
            {
                text: `5 or less`,
                checked: false
            }, 
            {
                text: `6 to 10`,
                checked: false
            }, 
            {
                text: `11 to 15`,
                checked: false
            },
            , 
            {
                text: `16 or more`,
                checked: false
            }
        ]
    },
    {
        text: `Please select the date or select number of years you have quit using tobacco products? (Skip question if you have not quit using tobacco products)`,
        qno:'Q32',
        options: [
            {
                text: `Month and year selector`,
                checked: false
            }, 
            {
                text: `Year selector`,
                checked: false
            }
        ]
    }
        ]
},

q10:
{
    descr1:'Your social history',
    section:true,
    Audience:'NewPatient',
    sub:[
        {
            text: `Did you migrate to the U.S.A?`,
            qno:'Q33',
            options: [
                {
                    text: `Yes`,
                    jumpTo:'Q35',
                    checked: false
                }, 
                {
                    text: `No`,
                    jumpTo:'Q33',
                    checked: false
                }
            ]
        },
        {
            text: `If yes, from which continent?`,
            qno:'Q34',
            options: [
                {
                    text: `Africa`,
                    checked: false
                }, 
                {
                    text: `Antartica`,
                    checked: false
                }, 
                {
                    text: `Asia`,
                    checked: false
                }, 
                {
                    text: `Australia`,
                    checked: false
                }, 
                {
                    text: `Europe`,
                    checked: false
                }, 
                {
                    text: `South America`,
                    checked: false
                }
            ]
        },
        {
            text: `How many years have you lived in the U.S.A?`,
            qno:'Q35',
            options: [
                {
                    text: `5 or less`,
                    checked: false
                }, 
                {
                    text: `6 to 10`,
                    checked: false
                }, 
                {
                    text: `11 to 15`,
                    checked: false
                }, 
                {
                    text: `16 or more`,
                    checked: false
                }
                
            ]
        }
    ]
},
q11:{
    descr1:`Health Conditions`,   
    Audience:'NewPatient',     
    text: `Tell us about your pulmonary health conditions. Select all that apply.`,
    qno:'Q36',
    options: [
        {
            text: `Asthma`,
            checked: false
        }, {
            text: `Pneumonia/Infection`,
            checked: false
        }, {
            text: `Hay Fever/Alergic Rhinitis`,
            checked: false
        }, {
            text: `Interstitial Lung Disease`,
            checked: false
        }, {
            text: `Lung Nodule/Lung Mass`,
            checked: false
        }, {
            text: `Chronic Bronchitis`,
            checked: false
        }, {
            text: `Tuberculosis (TB)`,
            checked: false
        }, {
            text: `DVT/Venous Thrombus`,
            checked: false
        }, {
            text: `Obstructive Lung Disease`,
            checked: false
        }, {
            text: `Sleep Apnea`,
            checked: false
        }, {
            text: `COPD or Emphysema`,
            checked: false
        }, {
            text: `Positive TB Test`,
            checked: false
        }, {
            text: `Pulmonary Embolism`,
            checked: false
        }, {
            text: `Sinus Disease`,
            checked: false
        }, {
            text: `Lung Cancer`,
            checked: false
        }
    ]
},
q12:{
    descr1:`Wheezing Triggers`,    
    Audience:'NewPatient',    
    text: `Tell us about any triggers that lead to wheezing.`,
    qno:'Q37',
    options: [
        {
            text: `Tobacco Smoke`,
            checked: false
        }, {
            text: `Foods`,
            checked: false
        }, {
            text: `Dust`,
            checked: false
        }, {
            text: `Weather changes`,
            checked: false
        }, {
            text: `Cold air`,
            checked: false
        }, {
            text: `Strong odors`,
            checked: false
        }, {
            text: `Medications`,
            checked: false
        }, {
            text: `Animals`,
            checked: false
        }, {
            text: `Exercise`,
            checked: false
        }, {
            text: `Allergies/Hay fever`,
            checked: false
        }, {
            text: `Stress or Anxiety`,
            checked: false
        }, {
            text: `Cods/respiratory infections`,
            checked: false
        }
    ]
},
q13:{
    descr1:`Medications and Durable Medical Equipment`,  
    Audience:'NewPatient',       
    text: `Difficulty with Medications. `,
    qno:'Q38',
    options: [
        {
            text: `I have trouble remembering to take some of my medications`,
            checked: false
        }, {
            text: `I have difficulty paying for some of my medications`,
            checked: false
        }, {
            text: `I am having side effects from my medications`,
            checked: false
        }, {
            text: `I need instructions on how to take my medications`,
            checked: false
        }
    ]
},
q14:{
    descr1:`Medications and Durable Medical Equipment`,  
    Audience:'NewPatient',       
    text: `I am using or use when needed`,
    qno:'Q39',
    options: [
        {
            text: `Steriods`,
            checked: false
        }, {
            text: `Antibiotics`,
            checked: false
        }, {
            text: `CPAP/BiPAP`,
            checked: false
        }, {
            text: `Oxygen`,
            checked: false
        }, {
            text: `Nebulizer`,
            checked: false
        }, {
            text: `Rescue Inhaler`,
            checked: false
        }
    ]
}
};
