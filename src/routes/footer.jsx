export default function Footer() {
    return (
        <footer className="w-3/6 mx-auto mt-10">
            <div className="flex justify-center py-4 items-center">
                <div className="flex items-center justify-center flex-1">
                    <p className="text-amber-200 text-md pr-5">Reach out to me</p>

                    <ul className="flex items-center gap-x-1 sm:flex-initial">
                        <li>
                            <a className="inline-block p-2 sm:hover:text-link" href="https://github.com/crjanb" target="_blank" rel="noopener noreferrer">
                                <svg className="h-6 w-6 hover:stroke-rose-400" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9CA3AF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                                <span className="sr-only">Github</span>
                            </a>
                        </li>
                        <li>
                            {/* LinkedIn Icon */}
                            <a className="inline-block p-2 sm:hover:text-link" href="https://www.linkedin.com/in/crjanb" target="_blank" rel="noopener noreferrer">
                            <img src="src\assets\linkedin2.png" alt="LinkedIn" className="h-6 w-6 hover:stroke-rose-400" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a className="inline-block p-2 sm:hover:text-link" href="https://twitter.com/crjanb_" target="_blank" rel="noopener noreferrer">
                                <svg className="h-6 w-6 hover:stroke-rose-400" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9CA3AF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                                </svg>
                                <span className="sr-only">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a className="inline-block p-2 sm:hover:text-link" href="mailto:crjanb@gmail.com">
                                <svg className="h-6 w-6 hover:stroke-rose-400" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9CA3AF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                                    <polyline points="3 7 12 13 21 7"></polyline>
                                </svg>
                                <span className="sr-only">Email</span>
                            </a>
                        </li>

                        <li>
                            <a className="inline-block p-2 sm:hover:text-link" href="https://kaggle.com/crjanb" target="_blank" rel="noopener noreferrer">
                            <img src="src\assets\kaggle2.png" alt="Kaggle" className="h-6 w-6 hover:stroke-rose-400" />
                                <span className="sr-only">Kaggle</span>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
        </footer>
    )
}
