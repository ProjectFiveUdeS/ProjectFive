package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.etudiant;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface EtudiantMapper {

    List<etudiant> select(@Param("cip") String cip);
    List<etudiant> selectAll();
    void insertEtudiant(@Param("etudiant") etudiant etud);
}
