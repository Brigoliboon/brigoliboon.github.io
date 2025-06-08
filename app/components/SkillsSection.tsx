'use client';
interface Tag{
	name: string;
	color: string;
}
interface Skill {
	name: string;
	level: number;
	tags: Tag[];
}
const skills: Skill[] = [
	{ name: 'UI/UX Design', level: 60, tags:[
		{name:'Figma', color: 'purple'},
		{name:'Adobe Illustrator', color: 'orange'}
	]},
	{ name: 'Front-end Development', level: 80, tags:[
		{name:'JavaScript', color: 'yellow'},
		{name:'ReactJS', color: 'blue'},
		{name:'Tailwind CSS', color: 'blue'},
		{name:'PHP', color: 'purple'},
		{name:'Laravel', color: 'pink'}
	]},
	{ name: 'Back-end Development', level: 90, tags:[
		{name:'Python', color: 'green'},
		{name:'Flask', color: 'blue'},
		{name:'FastAPI', color: 'green'},
		{name:'Java', color: 'red'},
	]},
	{ name: 'Database', level: 60, tags:[

		{name:'MySQL', color: 'blue'},
		{name:'MongoDB', color: 'green'},
		{name:'SQLite', color: 'blue'},
		{name:'Firestore', color: 'orange'},
		{name:'AWS', color: 'orange'},
	]},
	{ name: 'Deployment', level: 75, tags:[
		{name:'Vercel', color: 'gray'},
		{name:'Netlify', color: 'green'},
	]},
	{ name: 'Testing & Security', level: 70, tags:[
		{name:'Postman', color: 'orange'},
		{name:'GitGuardian', color: 'blue'}
	]},

	// Specialized Skills
	{ name: 'Android Development', level: 75, tags:[
		{name:'Postman', color: 'orange'},
		{name:'GitGuardian', color: 'blue'}
	]},
	{ name: 'Website Development', level: 80, tags:[
		{name:'Postman', color: 'orange'},
		{name:'GitGuardian', color: 'blue'}
	]},
	{ name: 'REST API', level: 85, tags:[
		{name:'Postman', color: 'orange'},
		{name:'GitGuardian', color: 'blue'}
	]},
];

const SkillsSection = () => {
	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">Technical Expertise</h2>
				<p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
					Specialized in modern mobile development technologies and frameworks
				</p>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
					{/* Core Technologies */}
					<div className="space-y-4 sm:space-y-6 px-2">
						<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-left gap-2">
							<svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
							</svg>
							Core Technologies
						</h3>
						{skills.slice(0, 6).map((skill) => (
							<div key={skill.name} className="group relative">
								<div className="flex flex-wrap sm:flex-nowrap justify-between mb-2 gap-2">
									<div className="flex flex-col flex-wrap sm:flex-nowrap items-left gap-2">
										<span className="font-medium">{skill.name}</span>
										{/* Skill-specific badges */}
										<div className="flex flex-wrap sm:flex-nowrap gap-1">
											{skill.tags.map((tag) =>(
												<span className={`px-2 py-0.5 text-xs rounded-full bg-${tag.color}-500/10 text-${tag.color}-400 border border-${tag.color}-500/20`}>{tag.name}</span>
											))}
										</div>
									</div>
									<span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
								</div>
								<div className="h-2.5 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm relative">
									<div
										className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-1000 ease-out scale-x-0 group-hover:scale-x-100"
										style={{ width: `${skill.level}%` }}
									></div>
									<div
										className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left animate-expand"
										style={{ width: `${skill.level}%` }}
									></div>
								</div>
								{/* Hover Card with Details */}
								<div className="hidden lg:block absolute left-full top-0 ml-4 w-48 p-3 rounded-lg bg-gray-800/90 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-700/50">
									<div className="text-sm space-y-2">
										<p className="font-medium">{skill.name}</p>
										<div className="space-y-1 text-xs text-gray-400">
											<p>• {skill.level}% Proficiency</p>
											<p>• {skill.level > 90 ? 'Expert' : skill.level > 80 ? 'Advanced' : 'Intermediate'} Level</p>
											<p>• {Math.round(skill.level / 10 - 5)} Years Experience</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Additional Skills */}
					<div className="space-y-4 sm:space-y-6 px-2">
						<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
							<svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12,0L3,7L4.63,8.27L12,14L19.36,8.27L21,7L12,0M19.37,10.73L12,16.47L4.62,10.73L3,12L12,19L21,12L19.37,10.73M19.37,15.73L12,21.47L4.62,15.73L3,17L12,24L21,17L19.37,15.73" />
							</svg>
							Specialized Skills
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{skills.slice(6).map((skill) => (
								<div
									key={skill.name}
									className="group bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors relative overflow-hidden"
								>
									<div className="relative z-10">
										<h4 className="font-medium mb-2 break-words">{skill.name}</h4>
										<div className="flex items-center gap-2">
											<div className="flex-grow h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
												<div
													className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left animate-expand"
													style={{ width: `${skill.level}%` }}
												></div>
											</div>
											<span className="text-sm text-purple-400 whitespace-nowrap">{skill.level}%</span>
										</div>
									</div>
									{/* Decorative Background */}
									<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
										{skill.name.includes('Firebase') ? (
											<svg className="absolute -right-4 -bottom-4 w-24 h-24 text-yellow-500 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
												<path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
											</svg>
										) : (
											<svg className="absolute -right-4 -bottom-4 w-24 h-24 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
												<path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
											</svg>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
