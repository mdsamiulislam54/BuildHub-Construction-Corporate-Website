import React, { useEffect,useState } from "react";
import {
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { Link } from "react-router";
import { MdEmail } from "react-icons/md";
import Logo from "../../assets/letter-b.png";

import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollposition, setScrollposition]= useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollPositionHandle = ()=>{
    const position = window.scrollY;
    setScrollposition(position)
  }

  useEffect(()=>{
        window.addEventListener('scroll', scrollPositionHandle)

        return()=>{
            window.removeEventListener('scroll',scrollPositionHandle)
        }
            
        
  },[])

  return (
    <>
      <div>
        <nav className={`sticky top-0 right-0 left-0 ${scrollposition>0 ? 'bg-gray-500':'bg-white'} transition-all duration-300`}>
          {/* Mobile Menu Icon */}
          <div className="flex justify-between items-center px-4 md:hidden">
            <span className="text-xl font-bold flex items-center">
              <img className="w-12" src={Logo} alt="" />
              BuildHub
            </span>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div
        className={`fixed top-0 right-0 h-full w-full bg-yellow-200 p-8 z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex gap-4 flex-col justify-center items-center ">
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Services
                  </Link>
                </li>
                <button className="bg-yellow-300 text-2xl font-bold w-full rounded-lg ">
                  Qoute
                </button>
              </ul>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <FiX size={24} />
        </button>
      </div>
    {/* Desktop Menu */}
          {/* top bar */}
          <div className="w-7xl mx-auto flex justify-between items-center py-3 max-sm:hidden">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <FaPhone />
                <span className="text-base">+123-456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail />
                <span className="text-base">info@company.com</span>
              </div>
            </div>
            <div className="flex">
              <FaFacebook
                size={20}
                style={{ margin: "10px" }}
                className="hover:scale-110 cursor-pointer transition-all duration-200"
              />
              <FaTwitter
                size={20}
                style={{ margin: "10px" }}
                className="hover:scale-110 cursor-pointer transition-all duration-200"
              />
              <FaLinkedin
                size={20}
                style={{ margin: "10px" }}
                className="hover:scale-110 cursor-pointer transition-all duration-200"
              />
              <FaYoutube
                size={20}
                style={{ margin: "10px" }}
                className="hover:scale-110 cursor-pointer transition-all duration-200"
              />
              <FaDiscord
                size={20}
                style={{ margin: "10px" }}
                className="hover:scale-110 cursor-pointer transition-all duration-200"
              />
            </div>
          </div>
          {/* navbar  */}
          <div className="flex  items-center justify-between w-7xl mx-auto max-sm:hidden">
            <div className="flex items-center justify-center">
              <Link to={"/"}>
                <img className="w-14" src={Logo} alt="" />
              </Link>
              <span className="text-2xl font-bold">BuildHub</span>
            </div>
            <div className="flex gap-10 items-center py-5 ">
              <ul className="flex gap-4 align-center max-sm:hidden ">
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Services
                  </Link>
                </li>
              </ul>

              <div>
                <button className="bg-yellow-300 text-2xl px-6 py-1 rounded-lg max-sm:hidden">
                  Qoute
                </button>
              </div>
            </div>
          </div>
        </nav>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut cum libero ad voluptates sequi minima pariatur voluptatibus, quis unde, atque accusantium facere facilis, nam vel ipsa vero? Iste, aliquid!
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque et aspernatur nobis distinctio nihil aperiam nemo, perspiciatis rerum omnis laborum eos ducimus architecto aut vitae necessitatibus, alias asperiores aliquid. Nesciunt sed quod autem magnam, maxime animi consequatur quo harum nisi iste et explicabo dolores libero, error exercitationem voluptatum eos cumque aliquid suscipit sit, natus dolore officia omnis tempore. Dignissimos maiores culpa blanditiis ex? Ipsam nemo quos distinctio fugit non dolor voluptate ducimus accusantium, laboriosam repudiandae quae saepe minima ea itaque deleniti inventore laborum ipsa iste temporibus reprehenderit, aliquam illo quia, magni sed! Reiciendis dolore quae excepturi nam eveniet non ad in, officiis aspernatur impedit iusto repellendus labore aliquam eligendi illum maiores. Incidunt, pariatur, veniam perferendis, animi delectus vitae architecto in quod debitis maiores provident ex molestiae ducimus illo! Magni odio nihil fugit ipsa nemo recusandae explicabo rerum voluptatum amet! Alias nisi id aliquam blanditiis labore tenetur voluptatum corporis expedita nam voluptatem nostrum ipsa nemo natus sequi ea quas officiis aliquid sapiente magnam asperiores, quo nobis ad recusandae totam. Fugiat amet, praesentium vel magni doloribus qui, tenetur impedit minima maiores in ratione quae ab blanditiis cupiditate delectus est debitis aspernatur iure sit aperiam recusandae molestias corporis? Sit maxime nemo eos corporis natus ab, dolor, corrupti praesentium officia vel aspernatur, deserunt totam laboriosam molestias? Omnis voluptates magnam nam, quod quo reiciendis ducimus laborum? Tempore beatae aperiam debitis quisquam ea voluptate accusantium sapiente sit exercitationem dolore iste nulla voluptatibus illo soluta quae unde dolorum quis, doloremque et? Consectetur autem fuga repudiandae officia omnis saepe veniam ducimus numquam harum. Nemo nam vitae commodi blanditiis beatae. Minima ipsum, facere, voluptate necessitatibus ducimus animi commodi voluptatem fugit delectus, harum voluptas dignissimos incidunt debitis iusto ab aspernatur eaque perspiciatis! Voluptatibus similique quas nemo hic ducimus consectetur, expedita suscipit ipsum id delectus atque fuga odit, voluptatem, quia tempore quaerat! Accusamus quos fuga deserunt dolor, atque, quia natus sapiente molestiae aliquid omnis velit suscipit inventore error, impedit nostrum commodi reprehenderit nemo nisi ad voluptas nam ducimus! Temporibus aliquid vel ad cum ipsa! Iure, itaque eum dolore iste perspiciatis aut dignissimos. Voluptatibus similique minus exercitationem voluptates maxime eveniet aut qui dolor illum hic? Repellat voluptas a distinctio quibusdam odio dolorem rem nisi eum expedita totam, eaque, natus consectetur molestias ratione similique nihil atque aliquam impedit dolorum! Debitis enim vel pariatur laborum maiores cupiditate nisi dolorum possimus doloribus dolores, alias nulla. Tempore odio veniam minima dolores vitae dicta nam nihil accusantium deleniti sequi mollitia quia optio numquam delectus, nemo tenetur perferendis exercitationem, voluptate pariatur iure impedit esse porro aliquid. Impedit modi non iure magni itaque rerum libero incidunt cum earum reprehenderit minus veritatis illum voluptate autem doloribus voluptates, odit officia molestiae rem, atque adipisci, tempora molestias at! Beatae officiis nulla, ullam quam quia inventore! Quo explicabo ducimus ipsum maiores molestias fugit? Laboriosam corporis id maiores aut fugiat quidem cupiditate, exercitationem minima tempora explicabo numquam minus iusto nam ad dolore accusamus quia mollitia ratione repellendus, harum officiis! Quae, accusamus magnam incidunt maiores quasi dolorem architecto ea recusandae maxime fugit quisquam, eos debitis quos mollitia ipsam nam quo perspiciatis culpa sunt odio nemo, hic est. Impedit, qui saepe ipsum, ea, excepturi odit eaque nobis voluptatum dignissimos cum sint quibusdam quo ipsa quas. Et error consectetur est nostrum cumque! Consequatur, quaerat enim. Sequi numquam, error pariatur veritatis beatae harum voluptates magni voluptatum vitae qui minus velit corporis optio, sed impedit non, recusandae nihil doloribus dolores! Quo aut nostrum illum, tempore necessitatibus ex quidem a soluta veritatis ratione eligendi laboriosam, vero quia natus labore debitis optio corrupti. Iure ipsa nostrum inventore at sint esse, voluptatum, laudantium accusantium alias earum minus tempora vero a tempore cupiditate fuga iste voluptates velit quo mollitia, ad impedit repellendus doloremque labore? Nemo libero exercitationem nulla obcaecati, nostrum quis nisi laudantium! Tempore necessitatibus cupiditate quisquam ullam ipsa nobis laborum quod, reiciendis, nulla enim asperiores excepturi non explicabo atque nihil iste, velit tenetur? Molestias ad culpa odit quia aperiam, dolorum praesentium, voluptatibus ipsam obcaecati soluta earum assumenda consectetur corporis explicabo rerum quas eum saepe minima similique repellendus hic a excepturi. Quia rerum veniam tempora voluptate vel eligendi. Ipsa tenetur voluptas iste ut enim alias aut nam ex culpa vitae! Ut ipsum cumque ea quidem ex aliquam voluptates sint temporibus numquam suscipit, quia autem libero! Odit magnam enim culpa minima ratione rem ab sequi porro veritatis unde reiciendis, quas illum hic perferendis quaerat dolorem quam aliquam perspiciatis beatae nesciunt repudiandae ea sapiente temporibus! Cum eius quia nisi tempore nesciunt, harum aliquam debitis voluptates minima quo suscipit commodi et, eveniet dolorum fuga rem ullam, aliquid sint doloribus officia corporis id laudantium consequatur vel. Voluptatibus, dolore. Cum vero inventore aut optio tempore doloremque amet, est recusandae. Nihil sint culpa ipsa accusamus placeat quidem atque debitis dolores repellendus ea obcaecati rerum optio, amet ut ratione ab saepe voluptatum perferendis. Possimus veritatis obcaecati recusandae eius veniam harum maxime cum! Ex cum ipsum explicabo minima ratione ducimus tempora sint ullam aspernatur molestiae! Rerum delectus repellendus expedita optio neque id reiciendis excepturi, cumque, laudantium, mollitia autem quidem porro illo reprehenderit odio. Sunt quia qui, pariatur quos commodi distinctio velit quibusdam atque eos molestias adipisci, sit rerum necessitatibus! Quo, nobis excepturi nulla accusantium nisi repellendus rem numquam atque unde modi temporibus eligendi ea saepe libero ut mollitia sunt possimus ex optio minus sapiente tempora corporis! Blanditiis similique quo beatae quasi, repellat omnis nisi iste assumenda tempora magni fugit illo aliquam nostrum nihil sapiente quae alias vitae. Suscipit exercitationem id molestias molestiae aperiam expedita nam, quibusdam cumque unde commodi placeat explicabo praesentium? Ab accusantium officia iusto sunt autem est nobis, odit asperiores natus dolores libero maxime sequi voluptatem saepe velit quo incidunt labore ipsum architecto vitae tempore neque voluptate! Placeat earum rem explicabo quasi aspernatur eum magnam modi, omnis, sapiente ab illum accusamus quae velit nesciunt autem! Delectus perspiciatis error, inventore neque, enim fuga tempora quam commodi, minus vitae quasi sequi necessitatibus! Quis nemo et sit consectetur asperiores amet ea, voluptates iusto recusandae tempore accusamus eius corporis eos necessitatibus? Unde optio quam sint, odio quia omnis doloribus culpa maiores, cupiditate beatae ipsa ducimus saepe ad deserunt et id laborum facere quae distinctio, temporibus incidunt? Debitis tempora, commodi delectus voluptate corrupti officiis aperiam voluptates aut sequi quisquam quos, quae hic voluptatibus dolore rerum praesentium omnis officia non ex nesciunt unde alias. Tempore ipsum consequatur quod quia quam! Rerum, cupiditate. Sunt debitis eum sint quasi pariatur aperiam, laboriosam consequuntur unde tempora adipisci accusantium consequatur mollitia facilis voluptas ab enim iure neque quod similique est optio nostrum repellat eligendi! Nobis repellendus accusantium nisi et voluptatem, quo perspiciatis officia vel error quam eum beatae necessitatibus tempore dolorum porro nesciunt excepturi harum rem aut veritatis nihil! Voluptatibus saepe esse aliquid unde tenetur alias eos non ipsum. Rem dignissimos vero qui velit sint, optio est praesentium mollitia. Sit voluptas nulla voluptate perspiciatis ut hic, odit in nostrum dolorum, deleniti reiciendis recusandae porro unde vero maxime delectus fugit illum modi, cupiditate at. Quae iste quod minus et corrupti quidem aperiam aut aspernatur quo, perspiciatis eveniet eos, praesentium dolore numquam consectetur natus? A fugit odit fuga earum. Perspiciatis minima ipsa neque cupiditate vel? Recusandae non voluptates nobis magni provident harum ipsam quaerat unde neque sint, voluptatibus quibusdam, explicabo officiis molestias sed itaque ducimus fuga eum. Vitae, beatae, odit aperiam exercitationem voluptates ea hic nemo nostrum facilis maiores qui vel eveniet culpa perferendis excepturi harum maxime distinctio itaque temporibus nisi velit. Delectus, ullam, veritatis, magni placeat voluptas fugiat excepturi eligendi dolore commodi nisi sed provident tempora vel minus quas sit blanditiis cumque quasi quod illo dolor et aut. Praesentium dicta illum officiis labore iure officia earum harum. Sunt necessitatibus cumque eius quos magni laudantium odit esse odio delectus, itaque dolores inventore officiis soluta asperiores fugit tenetur, nostrum tempora, deserunt debitis exercitationem? Modi, repellendus voluptatum repellat at rem possimus sint deleniti ut aliquid itaque tempora nobis. Veniam quidem incidunt quod blanditiis in rerum. Perspiciatis, architecto? Dolor, porro praesentium? Atque sequi eius deserunt consectetur doloremque aliquid officiis qui inventore velit voluptate sed rem perferendis odio tenetur, unde, facilis eaque repudiandae beatae est ipsa, nam necessitatibus a alias placeat. Perspiciatis cumque enim quis nihil ab recusandae qui provident! Iusto sint cumque molestias perspiciatis maiores ipsum quos saepe, quasi delectus commodi reiciendis voluptas quibusdam unde dignissimos architecto! Minus eum id incidunt fuga quibusdam dignissimos quae excepturi consequatur, magni maxime fugiat adipisci, reiciendis delectus ex in aut cum! Enim velit illum mollitia voluptates beatae vero exercitationem fuga itaque aspernatur neque modi sed iure ducimus quisquam voluptatem deleniti, vitae sunt officia vel illo. Ratione ea, voluptatem placeat neque rerum aliquid iusto architecto dignissimos qui amet a aspernatur non voluptate! Quo, repudiandae blanditiis fugit cumque consectetur delectus odio, consequuntur quidem maiores, iure enim eius id omnis illo perferendis. Debitis quaerat officia est nemo eaque mollitia omnis et doloribus aperiam doloremque quibusdam qui eius, culpa velit veritatis eum nobis, molestiae necessitatibus repellendus? Consequatur tempore ad soluta earum? Ad quisquam odit iste sint aperiam est labore delectus repudiandae quo mollitia rem pariatur neque doloremque, ipsum repellendus error voluptatem explicabo fuga similique esse distinctio tempora quae! Quas placeat velit facere! Facere dolor minima exercitationem amet vitae consequatur sed recusandae, obcaecati perferendis sunt hic quisquam quod eius ea, ullam odit quae laboriosam eos atque nesciunt repellat, voluptatum tempore! Asperiores adipisci illo fugiat incidunt accusantium, maxime esse unde repellendus eum iure nulla. Consequatur qui, quod aliquid perspiciatis ea sunt error, eveniet veniam, quo iste similique corporis laudantium! Enim reiciendis ipsa illo, esse natus officiis corporis, culpa tempore asperiores suscipit, laborum alias maxime vitae. Asperiores reiciendis quod repellat veritatis distinctio pariatur, voluptatum laboriosam officia adipisci autem perferendis non eos harum repudiandae tempora ipsa itaque esse quibusdam. Voluptate minus asperiores quidem nostrum! Excepturi omnis suscipit voluptatem, libero officia culpa provident, qui alias necessitatibus iste dolor quisquam. Aperiam deserunt dolorum assumenda voluptatem ea dolore reiciendis sunt voluptas, dolor optio facere? Laboriosam impedit illo error facere beatae expedita hic praesentium quod omnis vitae voluptates, aperiam porro voluptatum, itaque placeat labore. Officiis aperiam iusto beatae cupiditate quia distinctio impedit voluptatibus, modi dolorum sapiente consequatur minus pariatur molestiae magnam nesciunt perferendis dicta nulla at harum veritatis omnis eos corporis fuga? Ea assumenda tenetur nulla nemo molestias eius cumque aperiam aliquid, dignissimos eum est repellendus provident praesentium nihil fuga, expedita adipisci officia quo dicta qui distinctio illo culpa in? Aliquam numquam magni impedit asperiores vero, quaerat hic rem praesentium corrupti illo! Ullam maiores voluptate fugiat libero. Maiores, aliquid soluta sequi debitis, quasi eveniet iste ipsam, voluptates facilis asperiores eaque nemo quam vero alias explicabo enim. Voluptate labore enim libero expedita cum eos reprehenderit laborum consequuntur iste, rerum possimus quibusdam dolorum id consectetur, aut recusandae, natus nostrum nisi autem? Atque labore mollitia molestias cupiditate, quaerat magni sit amet necessitatibus ad quasi, assumenda exercitationem quos nemo eum iste libero blanditiis beatae ullam? Sint, consequatur sapiente, deserunt dolores provident necessitatibus consequuntur exercitationem architecto suscipit ut tempora quisquam quasi molestiae perspiciatis modi eaque veritatis nulla accusamus quibusdam inventore dolore harum tenetur, beatae nesciunt! Sed architecto nobis veniam culpa dolorem ut sit. Dignissimos quis inventore vitae in iste. Ut adipisci blanditiis dolores itaque? Vel labore itaque quidem reiciendis laudantium. Vitae neque alias laboriosam. Nulla, hic qui laudantium repellat maxime suscipit quisquam cupiditate repellendus deserunt, placeat provident reprehenderit debitis unde quas voluptates ratione dolor repudiandae esse aspernatur? Illo, at, tempore quisquam, adipisci vel dolore ex fugit deserunt autem hic architecto voluptatum ipsam voluptate eos? Nesciunt corrupti at temporibus dignissimos praesentium accusantium quos mollitia inventore, quisquam voluptate distinctio libero autem beatae cumque, enim ipsa? Culpa hic rem neque asperiores minima explicabo maxime ad animi cupiditate quam repudiandae, praesentium est. Ipsa error laudantium vel, facere ab quam ipsum sint in? Illum impedit sapiente repudiandae aut, perferendis ipsum quaerat ex veniam facilis tempora, architecto velit quam inventore officia earum corrupti, ab qui consequatur. Maiores, impedit, voluptatum labore tempora suscipit aliquam deserunt rem aliquid, voluptas magni aperiam! Nam enim cumque cupiditate incidunt. Porro pariatur totam eius deserunt quam magnam quibusdam magni, distinctio eos placeat ex qui sunt, similique molestiae nulla, blanditiis necessitatibus fugiat provident. Possimus accusantium eius blanditiis omnis veniam quis cum sequi, cumque vero eum consequuntur mollitia nulla maiores. Hic ratione perferendis, incidunt doloremque similique assumenda quasi deserunt sit exercitationem laborum, natus beatae possimus voluptatibus consequuntur labore ipsum in minus eius eos ipsam consectetur. Ad exercitationem excepturi iusto nesciunt ullam fuga mollitia, harum rem unde non dicta tenetur consequatur laboriosam modi provident pariatur deleniti architecto! At, natus itaque architecto quisquam cum atque nam possimus. Ex, cumque sequi! Adipisci labore eligendi aperiam harum autem expedita esse sapiente ab at! Deleniti dolores cupiditate neque, aperiam tenetur nulla eius obcaecati blanditiis optio iure mollitia sequi voluptatum facilis velit dolor laudantium debitis quos nihil quibusdam tempora architecto corporis praesentium? Aspernatur mollitia a doloremque ipsa, sint eum. Natus ducimus aperiam non, error beatae omnis eius illum velit dolorem blanditiis alias odit, quae aspernatur nulla! Minima fugit nemo consequuntur a ducimus hic quisquam molestiae in ipsum, reprehenderit aut suscipit aspernatur excepturi nisi velit quasi cumque voluptatibus officia est necessitatibus quae laborum. Minus, amet doloremque? Placeat exercitationem possimus alias odio soluta quis corrupti voluptas deleniti qui sed doloribus sequi, vitae velit tempora id earum similique est quo aut quisquam. Debitis corrupti eveniet repudiandae pariatur. Officiis deserunt voluptas eum illum enim quia eligendi. Et vero quaerat, nulla ab saepe iste nostrum ea eius possimus aliquam ratione explicabo delectus. Dolorem, consequuntur, odit dolore harum magni repellat tempore adipisci, aut ut et unde earum error maxime alias aliquam consectetur culpa nulla! Nesciunt obcaecati eligendi rerum quo facere asperiores ab quibusdam, eaque beatae, minima tempora dignissimos unde quidem earum quaerat sed aliquam, modi fuga saepe ad assumenda illum aperiam? Optio, placeat. Est voluptate, debitis harum facilis nam omnis aperiam perspiciatis sunt, unde dolor aspernatur repellendus eaque veniam. Tempore enim molestiae odit magnam provident veritatis accusamus dicta ipsa eum aliquam adipisci omnis, deleniti ut doloribus iste cumque illo nemo, totam eius. Officiis dolorum impedit dolore quas inventore totam in cumque modi nobis excepturi consectetur, necessitatibus voluptates beatae blanditiis sit ab quaerat hic ea et omnis eos assumenda. Neque animi corrupti, consequuntur aut recusandae accusamus eveniet deserunt qui illum adipisci non exercitationem assumenda autem soluta tempore impedit unde saepe placeat ea officiis repellat nobis, ducimus odio provident. Iste ea laborum vero numquam, fugiat qui dicta harum provident dolorem explicabo earum voluptatem nam praesentium pariatur quod facere sint neque. Suscipit nobis dolores temporibus quo cumque tempora consectetur, reprehenderit cum ipsum sequi neque totam commodi, dolor nemo, inventore laboriosam eveniet! Voluptatum eaque, tempora amet, labore inventore corporis libero aut nesciunt consequuntur animi voluptates asperiores suscipit. Alias molestias consequuntur quia, beatae dolore numquam adipisci a debitis, eius aliquid hic corporis facilis tempore incidunt dignissimos reiciendis eveniet iste! Quis alias assumenda dolorem pariatur incidunt nesciunt obcaecati eaque culpa neque ad, qui officiis architecto voluptas quam consectetur hic labore quos. Neque nulla esse facere possimus cupiditate mollitia libero, ullam id dicta optio, ad velit, rem quo voluptatem ex perspiciatis adipisci cumque ipsa. Quibusdam, iure impedit esse praesentium sit provident id animi ipsa consequuntur optio, dolorem fuga. Eum tempora beatae provident blanditiis eligendi quibusdam temporibus sunt aliquam similique quasi labore voluptatem voluptate iure earum ab nulla, alias eius doloremque corrupti? Quis, pariatur et. Harum doloribus unde asperiores natus debitis est, qui adipisci, quos quisquam ea eius et, excepturi explicabo assumenda possimus esse sit ipsum tempore voluptate. Dolorem excepturi asperiores vel, tenetur nobis, dolores eaque non repellendus, culpa doloribus expedita perspiciatis ut quod iste officiis omnis nam? Praesentium commodi error iusto est officia incidunt ipsa necessitatibus deserunt repellendus nostrum officiis, eveniet expedita perferendis exercitationem impedit amet illum porro inventore culpa cum magni perspiciatis et ab? Omnis nulla ad iste dicta! Corporis magni beatae obcaecati voluptate provident odit, optio dicta, temporibus quo deleniti, vel enim? Cum veritatis consequatur fugiat repellendus autem nisi blanditiis, fugit praesentium temporibus, sint, similique dolorum. Voluptates similique quidem odit voluptatibus, accusantium voluptatem, error aspernatur, vel qui libero esse iusto. Velit neque unde quasi dolor harum rem eligendi minus nesciunt vero, illum earum eum, vel tempore doloremque! Alias magni nesciunt, culpa a sunt neque corrupti quod ipsam magnam, facere animi? Cupiditate, eaque laudantium. Inventore expedita sequi sed vel dicta adipisci fugit vitae beatae facere, officiis, laboriosam neque odio sapiente exercitationem, velit aliquid cum molestiae? Cupiditate eum esse quibusdam modi optio earum sequi inventore minima vitae. Veniam optio nulla quisquam! Quo minima necessitatibus id alias nulla eaque aliquam. Praesentium ullam dolor iusto eos eius vel libero illum aliquid impedit atque voluptas sapiente voluptates quidem tempore, sint voluptatum possimus aliquam tenetur minima ipsa itaque alias. Praesentium suscipit, ab dolorum iure ex obcaecati saepe consectetur, veniam explicabo illum voluptatem? Illo beatae, cum repudiandae ipsam exercitationem nobis reiciendis fuga non illum consequuntur nihil, ipsa molestias eius pariatur quasi ducimus soluta libero veniam autem porro odit sint maiores at! Molestias, odit ea nobis, ex est sapiente nemo placeat culpa harum impedit dignissimos laudantium recusandae. Totam debitis quia nisi accusamus atque, itaque culpa voluptatum molestiae quos harum odio officiis explicabo. Dolore dolorem provident corrupti eum! Modi placeat ea ipsam rerum dolor totam dolores quisquam ullam aliquid aperiam, nemo hic cupiditate ratione necessitatibus perferendis recusandae nostrum nisi fuga quae dolorem officiis alias similique veniam. Numquam quia odit nesciunt cum a deserunt maiores sint quibusdam! Consequuntur culpa, sed quas excepturi eius assumenda reprehenderit placeat ea ipsa, esse eveniet repellendus amet unde exercitationem omnis enim repudiandae ut quae est? Laudantium, facilis voluptates quo, repudiandae dolor, perspiciatis doloremque libero quos animi et qui ut in omnis! Ex rerum, qui officia libero at dolorem autem, odio rem quod sit voluptatum eaque, itaque similique maiores maxime possimus amet labore enim magni explicabo totam? Accusantium officia consequatur commodi molestiae. Fugit eum repudiandae voluptas adipisci ullam, suscipit cupiditate commodi esse, fugiat voluptates numquam recusandae praesentium dolore facilis sapiente aut ut magnam doloribus. Enim unde quae aperiam quos natus, ipsam doloremque incidunt laudantium aliquam porro dolores quaerat esse vel adipisci, ut officiis harum repudiandae quasi sapiente provident cum velit tempore at maxime. Blanditiis libero odio praesentium provident consectetur quas sint dolorum, vitae sequi ad quasi atque distinctio deserunt! Quis enim nam, vero dolorem, esse sunt distinctio odio ea aperiam debitis, voluptas beatae obcaecati earum! Iure nihil, nesciunt placeat at eaque eligendi eius sapiente ullam? A recusandae veniam unde cupiditate laboriosam quisquam, autem ratione quasi atque iure tenetur numquam voluptates dolorem! Vitae aliquam, architecto officia accusantium sapiente expedita dolore dolorem quibusdam in, natus omnis ut repellat, eos nam tenetur? Error inventore aliquid alias id, corporis similique perspiciatis repellat possimus quae officiis in rem excepturi doloribus et accusantium, ipsa tenetur incidunt maiores, commodi beatae natus vel facere dolores? Nostrum quos fugiat nobis ullam. Facilis ipsam cum rem. Necessitatibus maxime voluptas officia voluptatibus nesciunt, illum a cupiditate quidem nostrum quam modi quisquam explicabo autem, placeat ea aperiam numquam soluta obcaecati voluptatum nemo est deleniti expedita dolore. Corrupti harum in saepe facilis non! Non quos nemo temporibus blanditiis quasi corrupti facere sequi consequuntur quod reprehenderit necessitatibus molestias, iste aspernatur eum velit maxime odit adipisci eveniet dolor aperiam tempora in harum quibusdam! Excepturi sunt doloribus dolor minus, fugiat officiis consectetur placeat? Animi nisi, ex accusamus aliquid at sequi hic possimus id dolor, similique corrupti. Voluptas non quisquam distinctio consequatur optio dignissimos, ratione assumenda est ea, temporibus deleniti nam, accusantium tempore doloremque quas praesentium? Quae temporibus sed accusantium distinctio assumenda, eligendi quisquam iure voluptatum, nisi maxime in praesentium illo laboriosam repellendus cum et nemo facere. Impedit rem quaerat, illo perferendis ducimus sit sint iure fugit odit velit fugiat veritatis. Voluptates blanditiis, porro amet similique quidem molestias suscipit nemo fuga hic doloribus nobis quae, consectetur sunt est autem facere molestiae! Alias officia pariatur sit tenetur quos porro laborum possimus quo, placeat consectetur, officiis quia nam fuga nobis animi eaque eius provident ipsam maiores. Molestias quod, rerum porro praesentium id quo corporis aut excepturi necessitatibus perferendis eaque aspernatur in quidem ex. Suscipit porro quia cumque, vero ullam, enim ducimus iure, quos harum blanditiis fuga. Eveniet eaque aspernatur, odit natus ipsa exercitationem neque fugiat, id vel mollitia ipsum facilis laudantium porro! Nihil ducimus ipsam non hic pariatur, corporis quibusdam, sit, tempore nemo perspiciatis est quae reiciendis accusantium debitis aperiam impedit. Hic architecto provident eos excepturi aperiam atque neque dolor beatae, sed accusamus esse amet temporibus natus aut eaque, molestiae delectus sint aliquam suscipit nisi quidem corporis molestias ut deserunt. Laudantium hic consectetur facere temporibus ullam odit et soluta quo voluptates assumenda laborum ratione adipisci dolores quasi distinctio quam, cupiditate iusto unde commodi provident corporis neque explicabo non voluptatum. Alias eveniet modi nobis necessitatibus, doloremque tenetur cum excepturi minus exercitationem provident beatae repudiandae. Non quo laboriosam, eligendi nisi odio tempore assumenda libero corrupti, rerum facilis tempora quam doloremque molestias labore dolor corporis fuga natus voluptates ipsam. Officia consequatur voluptatum neque enim cum sit consectetur sint aliquam error eos, minima mollitia vero dolor, modi tempora similique numquam blanditiis sequi. Distinctio vel quo a ipsum vitae quasi hic veniam. Temporibus odit sequi quae! Pariatur porro aut, ex dolorum dolorem assumenda sunt tempore suscipit? Veritatis libero sunt aliquid deserunt explicabo fugiat odit veniam culpa voluptates minima perferendis voluptatibus aperiam aut modi, neque quod voluptate dolores, exercitationem aspernatur. Repellat a voluptas repellendus aliquid voluptates illum quidem, qui facilis nihil accusantium vero neque, voluptate dolor quibusdam facere dolores sequi saepe quo voluptatum commodi iusto dolore recusandae doloremque! Laboriosam voluptatum numquam officia sed? Labore illo at a sequi fugit perferendis veritatis, eaque aliquam porro earum magni doloremque quam explicabo facere harum? Nobis recusandae autem quasi nisi quaerat ratione optio quia unde, dolor reprehenderit, minus adipisci magnam id inventore aliquam ducimus omnis nulla molestias deleniti debitis aspernatur officia quam? Deserunt porro dolor, atque minus omnis id quo culpa quia voluptatum expedita tempora rem repellat nemo reprehenderit facere nobis voluptatem sequi odit voluptatibus iste rerum debitis? Provident, odio quam porro ducimus culpa itaque voluptas laboriosam distinctio atque, assumenda vero ut ratione impedit consequuntur, reprehenderit qui officiis? In corrupti beatae fugiat ea suscipit minus doloremque labore harum earum voluptate ab dolorem nisi nihil, voluptatem, enim aspernatur temporibus? Distinctio, quisquam vel animi amet quo quibusdam iure placeat vero libero velit quasi quia assumenda? Porro quidem, maxime earum repellat minus voluptates perspiciatis deserunt, similique eveniet reiciendis qui consectetur quo rem possimus nemo molestiae atque nesciunt voluptate laboriosam repellendus itaque error asperiores? Quis provident corporis accusantium dolorum eaque nulla perspiciatis rem sunt et, aut quisquam, ipsum facilis voluptas earum nobis dicta quibusdam voluptatem non voluptatum sed. Veritatis asperiores, voluptatum aut quae at, dolores tempore neque, esse soluta ullam deleniti. Iure ut sunt dolorum eos! Nesciunt soluta quibusdam ipsam laborum quia, nobis expedita, sed iure qui iste officia omnis vero consequuntur veniam reprehenderit sint illum consequatur. Fuga et quod quae nesciunt eaque ipsum eveniet quas quibusdam ipsa molestiae. Ab nesciunt dolore iste repellendus qui inventore ut tempore voluptate quam, odio deserunt fugit quo doloribus architecto magni veritatis quibusdam porro temporibus at placeat quae explicabo reprehenderit. Exercitationem reprehenderit rerum aut debitis porro consequatur autem ipsum sapiente nulla animi adipisci officiis ipsa quidem iste laudantium aspernatur ut, voluptatem deleniti. Id velit optio sequi quasi ratione quaerat inventore quos suscipit quis qui, possimus expedita quidem. Ut assumenda quaerat est natus illum omnis porro blanditiis, temporibus dolorum quis tempore distinctio expedita ullam, eos maxime beatae obcaecati ipsa? Dignissimos fuga natus ea! Quia quidem reiciendis temporibus odio, laboriosam illum ut iste aut eaque. Hic consequatur laborum quia fugiat magni ad similique obcaecati beatae consequuntur expedita! Voluptatem iusto earum suscipit vitae minus velit, consectetur itaque! Cum officiis dolor, eligendi exercitationem assumenda molestias natus molestiae eaque dolorem, ad quas tenetur minus beatae perspiciatis sequi veritatis laborum suscipit numquam soluta laudantium quaerat dolores expedita? Tempora delectus illum temporibus enim odit impedit dolore expedita numquam et, maiores iste fugit unde quisquam adipisci. Aliquam hic, omnis debitis repudiandae ea, iure quis repellat dignissimos, eaque ut culpa nam soluta perferendis neque at explicabo temporibus itaque adipisci quia? Dolorum consectetur deserunt dicta error iusto incidunt doloribus qui repellendus magni tempora delectus quidem voluptates, doloremque, fugiat suscipit velit ipsum pariatur provident, sapiente nam laboriosam quos obcaecati cupiditate ipsam? Cumque cupiditate dolore hic aliquam in saepe odit non. Officiis recusandae quisquam voluptatem modi fugiat dicta iure debitis reprehenderit, voluptates delectus odio! Atque aspernatur iusto praesentium alias harum corrupti ratione earum, quibusdam eum autem sit adipisci doloremque voluptas voluptates.</p>
      </div>
    </>
  );
};

export default Navbar;
