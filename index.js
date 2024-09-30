// Import the Prisma client
const { PrismaClient } = require('@prisma/client');

// Instantiate the Prisma client
const prisma = new PrismaClient();

// Function to create data in GenericAddress and CompanyProfile models
async function createData() {
  try {
    // const newAddress = await prisma.genericAddress.create({
    //   data: {
    //     country: 'USA',
    //     postcode: '12345',
    //     town: 'Smalltown',
    //     city: 'Metropolis',
    //     state: 'New York',
    //     address: '123 Main St',
    //     addressTwo: 'Apt 4B',
    //   },
    // });

    // // Log the new address
    // console.log('New Address Created:', newAddress);

    // Insert data into CompanyProfile
    const newCompanyProfile = await prisma.companyProfile.create({
      data: {
        locale: 'en-US',
        keywords: ['tech', 'innovation'],
        categorisedKeywords: ['industry', 'technology'],
        bio: 'Leading company in tech innovation.',
      },
    });
    console.log('New CompanyProfile Created:', newCompanyProfile);

    // Insert data into EmployeeProfile
    const newEmployeeProfile = await prisma.employeeProfile.create({
      data: {
        locale: 'en-US',
        keywords: ['development', 'management'],
        categorisedKeywords: ['engineering', 'leadership'],
        bio: 'Experienced software engineer.',
      },
    });
    console.log('New EmployeeProfile Created:', newEmployeeProfile);

    // Insert data into UserProfile
    const newUserProfile = await prisma.userProfile.create({
      data: {
        locale: 'en-US',
        keywords: ['content', 'writing'],
        categorisedKeywords: ['creative', 'freelancing'],
        bio: 'Freelance writer and content creator.',
      },
    });
    console.log('New UserProfile Created:', newUserProfile);

    // Insert data into TosAcceptance
    const newTosAcceptance = await prisma.tosAcceptance.create({
      data: {
        ip: '192.168.0.1',
        date: Math.floor(Date.now() / 1000), // Current timestamp in seconds
      },
    });
    console.log('New TosAcceptance Created:', newTosAcceptance);

    // Insert data into Service
    const newService = await prisma.service.create({
      data: {
        type: 'premium',
        balance: 1000,
      },
    });
    console.log('New Service Created:', newService);



    

   
  } catch (error) {
    console.error('Error creating data:', error);
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}

// Call the function to create data
createData();
