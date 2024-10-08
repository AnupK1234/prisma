// Import the Prisma client
const { PrismaClient } = require('@prisma/client');

// Instantiate the Prisma client
const prisma = new PrismaClient();

// Function to create data in GenericAddress and CompanyProfile models
async function createData() {
  try {
    const newAddress = await prisma.genericAddress.create({
      data: {
        country: 'USA',
        postcode: '12345',
        town: 'Smalltown',
        city: 'Metropolis',
        state: 'New York',
        address: '123 Main St',
        addressTwo: 'Apt 4B',
      },
    });

    // Log the new address
    console.log('New Address Created:', newAddress);

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



    // Insert into PublisherDevices
  const publisherDevices = await prisma.publisherDevices.create({
    data: {
      desktop: true,
      mobile: true,
      tablet: false,
    },
  });

  // Insert into PublisherSite
  const publisherSite = await prisma.publisherSite.create({
    data: {
      company: 12345,
      name: 'Awesome Publisher',
      zones: ['Zone1', 'Zone2'],
      countries: ['US', 'UK'],
      publisherCountry: 'US',
      vertical: 'Technology',
      deviceId: publisherDevices.id, // Connect PublisherDevices via ID
      displayInSiteList: true,
      status: 'ACTIVE',
      studio: false,
    },
  });

  // Insert into MediaRates
  const mediaRates = await prisma.mediaRates.create({
    data: {
      averageDailyUniqueReach: 5000,
      averageDailyFrequency: 3,
      country: 'US',
      zone: 'Zone1',
      vertical: 'Technology',
      pricingModel: 'CPM',
      averageVolume: 1000,
      format: 'Banner',
      formatSize: '300x250',
      device: 'Desktop',
      placement: 'Top',
      currency: 'USD',
      publisherRate: 20.5,
      initialPubRate: 18.0,
      publisherFee: 2.5,
      clientRate: 22.5,
      publisherSiteId: publisherSite.id, // Connect PublisherSite via ID
    },
  });

  console.log('Data inserted successfully:', { publisherDevices, publisherSite, mediaRates });



  const mediaFormat = await prisma.mediaFormat.create({
    data: {
      id: 'unique-media-format-id', // Provide a unique ID for the document
      formatID: 1, // Example FormatID
      format: 'JPEG', // Example format
      version: '1.0.0', // Example version
      executeCode: 'exec_jpeg', // Example execute code
    },
  });

  console.log('MediaFormat inserted successfully:', mediaFormat);
    

  


   
  } catch (error) {
    console.error('Error creating data:', error);
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}

// Call the function to create data
createData();
