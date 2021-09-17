POST /api/v1/partner/org/new  -- creates a new Provider of type e.g. Organization / institute
GET /api/v1/partner/org/{orgId} -- get details of a organization provider
PUT /api/v1/partner/org/{orgId}/update -- updates the details

POST /api/v1/partner/org/{orgId}/course/new -- create new course / courses for this org
GET /api/v1/partner/org/{orgId}/course/{courseId} -- get details  for this course
PUT /api/v1/partner/org/{orgId}/course/{courseId}/update -- updates the details
GET /api/v1/partner/org/{orgId}/course -- get courses details  for this org

POST /api/v1/partner/org/{orgId}/course/{courseId}/batch/new -- create new batch for this org
GET /api/v1/partner/org/{orgId}/course/{courseId}/batch/{batchId} -- get details  for this batch
PUT /api/v1/partner/org/{orgId}/course/{courseId}/batch/{batchId}/update -- updates the details
GET /api/v1/partner/org/{orgId}/course/{courseId}/batch -- get courses details  for this org

<------------------------------------------------------------------------------------>
POST /api/v1/partner/ind/new  -- creates a new individual Provider of type tutor
GET /api/v1/partner/ind/{userId} -- get teacher details for this tutor

POST /api/v1/partner/ind/{userId}/course/new -- create new course / courses for this tutor
GET /api/v1/partner/ind/{userId}/course/{courseId} -- get course details  for this tutor
PUT /api/v1/partner/ind/{userId}/course/{courseId}/update -- updates the details
GET /api/v1/partner/ind/{userId}/course -- get courses details  for this tutor